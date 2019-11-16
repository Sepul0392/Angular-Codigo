import { AuthAdminService } from '../../../services/auth-admin.service';
import { CompetenciaI } from '../../../models/competencia';
import { AreaMateriaI } from '../../../models/areaMateria';
import { GradoI } from '../../../models/grado';
import { CompetenciaVisualizarI } from '../../../models/competenciaVisualizar';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-gestionar-competencias-admin',
  templateUrl: './gestionar-competencias-admin.component.html',
  styleUrls: ['./gestionar-competencias-admin.component.css']
})
export class GestionarCompetenciasAdminComponent implements OnInit {

  grados:GradoI[];
  competencias:CompetenciaI[];
  areasMaterias:AreaMateriaI[];
  competenciasVisualizar:CompetenciaVisualizarI[];
  competenciaToSave:CompetenciaI;
  areaMateriaToSave:AreaMateriaI;
  newID:number;
  temp:number;

  constructor(private router: Router, private AuthAdminService: AuthAdminService) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.getOptions();
    this.getCompetencias();
  }

  getOptions(){
    this.AuthAdminService.allGrade().subscribe(res => {
      this.grados = res as GradoI[];
    });
    this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
      this.areasMaterias = res as AreaMateriaI[];
    });
  }

  getCompetencias() {
    this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
      this.areasMaterias = res as AreaMateriaI[];

      this.AuthAdminService.allCompetencias().subscribe(res => {
        this.AuthAdminService.Competencias = res as CompetenciaI[];
        this.competenciasVisualizar = res as CompetenciaVisualizarI[];
  
        for (let i = 0; i < this.AuthAdminService.Competencias.length; i++) {
          for (let n = 0; n < this.areasMaterias.length; n++) {
            if (this.AuthAdminService.Competencias[i].id_areaMateria == this.areasMaterias[n].id_areaMateria) {
              this.competenciasVisualizar[i].areaMateria = this.areasMaterias[n].nombre_areaMateria;
            }
          }
        }
        //console.log("actividades visualizar:", this.actividadVisualizar)
      });
    });
  }

  //Crear Competencia en Mongo
  crearCompetencia(form: NgForm): void {
    this.AuthAdminService.allCompetencias().subscribe(res => {
      this.AuthAdminService.Competencias = res as CompetenciaI[];

      //crear ID
      if (this.AuthAdminService.Competencias.length == 0) {
        this.newID = 1;
      }
      else {
        for (let n = 0; n < this.AuthAdminService.Competencias.length; n++) {
          for (let i = 0; i < this.AuthAdminService.Competencias.length; i++) {
            //console.log('n=', n, 'id_competencia', this.AuthAdminService.Competencias[i].id_competencia);
            if (n + 1 == this.AuthAdminService.Competencias[i].id_competencia) {
              this.newID = n + 2;
              this.temp = 0;
              i = this.AuthAdminService.Competencias.length;
            }
            else {
              this.newID = n + 1;
              this.temp = 1;
            }
          }
          if (this.temp == 1) {
            n = this.AuthAdminService.Competencias.length + 1;
          }
        }
      }

      const newCompetencia = {
        id_competencia: this.newID,
        nombre_competencia: form.value.nombre_competencia,
        id_areaMateria: form.value.id_areaMateria,
        gradoInicial: form.value.gradoInicial,
        gradoFinal: form.value.gradoFinal
      }
      console.log('datosCompetencia', newCompetencia);
    
      this.AuthAdminService.createCompetencia(newCompetencia).subscribe(res => {
        console.log(res);
        this.resetForm(form);
        this.getCompetencias();
      });

    });
  }

  //Crear AreaMateria en Mongo
  CrearAreaMateria(form: NgForm): void {
    this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
      this.AuthAdminService.AreasMaterias = res as AreaMateriaI[];

      //crear ID
      if (this.AuthAdminService.AreasMaterias.length == 0) {
        this.newID = 1;
      }
      else {
        for (let n = 0; n < this.AuthAdminService.AreasMaterias.length; n++) {
          for (let i = 0; i < this.AuthAdminService.AreasMaterias.length; i++) {
            //console.log('n=', n, 'id_competencia', this.AuthAdminService.AreasMaterias[i].id_areaMateria);
            if (n + 1 == this.AuthAdminService.AreasMaterias[i].id_areaMateria) {
              this.newID = n + 2;
              this.temp = 0;
              i = this.AuthAdminService.AreasMaterias.length;
            }
            else {
              this.newID = n + 1;
              this.temp = 1;
            }
          }
          if (this.temp == 1) {
            n = this.AuthAdminService.Competencias.length + 1;
          }
        }
      }

      const newAreaMateria = {
        id_areaMateria: this.newID,
        nombre_areaMateria: form.value.nombre_areaMateria
      }
      console.log('datosCompetencia', newAreaMateria);
    
      this.AuthAdminService.createAreaSubject(newAreaMateria).subscribe(res => {
        console.log(res);
        this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
          this.areasMaterias = res as AreaMateriaI[];
          this.resetForm(form);
        });
      });
    });
  }

  //Almacenar info temporal de una Competencia
  saveDataCompetencia(competenciahtml){
    this.competenciaToSave = competenciahtml;
    //console.log('actividad guardada:', this.competenciaToSave);
  }
  //Almacenar info temporal de una AreaMAteria
  saveDataAreaMateria(areaMateriahtml){
    this.areaMateriaToSave = areaMateriahtml;
    //console.log('actividad guardada:', this.competenciaToSave);
  }

  //Eliminar Competencia de Mongo
  deleteCompetencia(){
    //console.log("id para eliminar:", this.competenciaToSave.id_competencia);
    this.AuthAdminService.deleteCompetencia(this.competenciaToSave).subscribe(res =>{
      //console.log(res);
      this.getCompetencias();
      this.competenciaToSave = new CompetenciaI();
    });
    //window.location.reload();
  }
  //Eliminar AreaMateria de Mongo
  deleteAreaMateria(){
    //console.log("id para eliminar:", this.competenciaToSave.id_competencia);
    this.AuthAdminService.deleteAreaSubject(this.areaMateriaToSave).subscribe(res =>{
      //console.log(res);
      this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
        this.areasMaterias = res as AreaMateriaI[];
        this.areaMateriaToSave = new AreaMateriaI();
      });
    });
    //window.location.reload();
  }

  //Resetear pagina
  resetPage(){
    window.location.reload();
  }

  //resetear Formulario
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.newID = 1;
      this.temp = 0;
    }
  }

}
