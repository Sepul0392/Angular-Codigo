import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms'; 
import { ColegioI } from '../../../models/colegio';
import { GradoI } from '../../../models/grado';
import { MateriaI } from '../../../models/materia';
import { AreaMateriaI } from '../../../models/areaMateria';
import { AuthAdminService } from '../../../services/auth-admin.service';
import { MateriaVisualizarI } from '../../../models/materiaVisualizar';


@Component({
  selector: 'app-gestionar-colegio-admin',
  templateUrl: './gestionar-colegio-admin.component.html',
  styleUrls: ['./gestionar-colegio-admin.component.css']
})
export class GestionarColegioAdminComponent implements OnInit {

  colegios:ColegioI[];
  resColegio:any;
  areasMaterias:AreaMateriaI[];
  materias:MateriaI[];
  materiasVisualizar:MateriaVisualizarI[];
  grados:GradoI[];
  materiaToSave:MateriaI;
  gradoToSave:GradoI;
  newID:number;
  temp:number;

  constructor(private router: Router, private AuthAdminService: AuthAdminService) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.getOptions();
  }

  getOptions(){
    this.AuthAdminService.allGrade().subscribe(res => {
      this.grados = res as GradoI[];
    });
    this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
      this.areasMaterias = res as AreaMateriaI[]; 

      this.AuthAdminService.allSubject().subscribe(res => {
        this.materias = res as MateriaI[];
        this.materiasVisualizar = res as MateriaVisualizarI[];

        for (let i = 0; i < this.materias.length; i++) {
          for (let n = 0; n < this.areasMaterias.length; n++) {
            if (this.materias[i].id_areaMateria == this.areasMaterias[n].id_areaMateria) {
              this.materiasVisualizar[i].areaMateria = this.areasMaterias[n].nombre_areaMateria;
            }
          }
        }
        //console.log("actividades visualizar:", this.materiasVisualizar)
      });
    });

    const infoColegioL = {
      id_colegio: 0
    }
    this.AuthAdminService.loadColegio(infoColegioL).subscribe(res => {
      this.resColegio = res as ColegioI;
      this.AuthAdminService.selectedColegio = this.resColegio.school;
      //console.log("info Colegio Local:", this.AuthAdminService.selectedColegio);
    });
  }

  //Actualizar datos del Colegio
  actualizarColegio(form: NgForm): void{
    const newInfoColegioL = {
      id_colegio: 0,
      nombre_colegio: form.value.nombre_colegio,
      ciudad: form.value.ciudad,
      direccion: form.value.direccion,
      telefono: form.value.telefono,
      tipo_colegio: form.value.tipo_colegio,
      calendario: form.value.calendario
    }
    console.log(newInfoColegioL);
    this.AuthAdminService.uploadSchool(newInfoColegioL).subscribe(res => {
      console.log(res);
      this.getOptions();
      this.resetForm(form);
    });
  }

  //Crear Materia en Mongo
  crearMateria(form: NgForm): void {
    this.AuthAdminService.allSubject().subscribe(res => {
      this.AuthAdminService.Materias = res as MateriaI[];

      //crear ID
      if (this.AuthAdminService.Materias.length == 0) {
        this.newID = 1;
      }
      else {
        for (let n = 0; n < this.AuthAdminService.Materias.length; n++) {
          for (let i = 0; i < this.AuthAdminService.Materias.length; i++) {
            //console.log('n=', n, 'id_competencia', this.AuthAdminService.Materias[i].id_materia);
            if (n + 1 == this.AuthAdminService.Materias[i].id_materia) {
              this.newID = n + 2;
              this.temp = 0;
              i = this.AuthAdminService.Materias.length;
            }
            else {
              this.newID = n + 1;
              this.temp = 1;
            }
          }
          if (this.temp == 1) {
            n = this.AuthAdminService.Materias.length + 1;
          }
        }
      }

      const newMateria = {
        id_materia: this.newID,
        nombre_materia: form.value.nombre_materia,
        id_colegio: 0,
        id_areaMateria: form.value.id_areaMateria,
        gradoInicial: form.value.gradoInicial,
        url_imagen: "http://localhost:3000/public/repositorio/materiaPorDefecto.jpg"
      }
      //console.log('datos newMateria', newMateria);
    
      this.AuthAdminService.createMateria(newMateria).subscribe(res => {
        console.log(res);
        this.resetForm(form);
      });

    });
  }

  //Crear Grado en Mongo
  CrearGrado(form: NgForm): void {
    const newGrado = {
      id_grado: form.value.id_grado,
      nombre_grado: form.value.nombre_grado
    }
    //console.log('datosGrado', newGrado);

    this.AuthAdminService.createGrade(newGrado).subscribe(res => {
      console.log(res);
      this.resetForm(form);
    });
  }

  //Eliminar Materia de Mongo
  deleteMateria(){
    //console.log("id para eliminar:", this.materiaToSave.id_materia);
    this.AuthAdminService.deleteMateria(this.materiaToSave).subscribe(res =>{
      //console.log(res);
      this.getOptions();
      this.materiaToSave = new MateriaI();
    });
    //window.location.reload();
  }
  //Eliminar Grado de Mongo
  deleteGrado(){
    //console.log("id para eliminar:", this.gradoToSave.id_competencia);
    this.AuthAdminService.deleteGrade(this.gradoToSave).subscribe(res =>{
      //console.log(res);
      this.getOptions();
      this.gradoToSave = new GradoI();
    });
    //window.location.reload();
  }

  //Almacenar info temporal de una Competencia
  saveDataMateria(materiahtml){
    this.materiaToSave = materiahtml;
    //console.log('docente guardada:', this.materiaToSave);
  }
  //Almacenar info temporal de una AreaMAteria
  saveDataGrado(gradohtml){
    this.gradoToSave = gradohtml;
    //console.log('estudiante guardada:', this.gradoToSave);
  }

  //Resetear pagina
  resetPage(){
    window.location.reload();
  }

  //resetear Formulario
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.newID = 0;
      this.temp = 0;

      this.getOptions();
    }
  }
}
