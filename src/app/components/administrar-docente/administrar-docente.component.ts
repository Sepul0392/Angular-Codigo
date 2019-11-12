import { AuthDService } from '../../services/auth-d.service';
import { Component, OnInit } from '@angular/core';
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { DocenteI } from '../../models/docente';
import { ColegioI } from '../../models/colegio';
import { MateriaActivaI } from '../../models/materiaActiva';
import { MateriaActivaVisualizarI } from '../../models/materiaActivaVisualizar';
import { ContentREAService } from '../../services/content-rea.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-administrar-docente',
  templateUrl: './administrar-docente.component.html',
  styleUrls: ['./administrar-docente.component.css']
})
export class AdministrarDocenteComponent implements OnInit {

  public nombreApellidoDocente:string;
  public idDocente:number;
  resDocente:any;
  resColegio:any;
  DocenteInfo: DocenteI;
  ColegioInfo: ColegioI;
  MateriaActivaInfo: MateriaActivaVisualizarI[];
  materia:MateriaI[];
  grado:GradoI[];
  newIDMA:number;
  temp:number;

  materiaActivaToSave:MateriaActivaI;

  constructor(private ContentREAService: ContentREAService, private AuthDService: AuthDService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.DocenteInfo = new DocenteI;
    this.ColegioInfo = new ColegioI;

    this.getOptions();
    this.getActividadinForm();
    this.idDocente = this.AuthDService.getIdDocente();
    this.nombreApellidoDocente = this.AuthDService.getnombreApellidoDocente();
    this.getInformacionCompleta();
  }

  //Obtener los datos de los options
  getOptions(){
    this.ContentREAService.allSubject().subscribe(res =>{
      this.materia = res as MateriaI[];
      //console.log("1:",this.materia.length);
    });
    this.ContentREAService.allGrade().subscribe(res =>{
      this.grado = res as GradoI[];
    });
  }

  //Obtener informacion y listado de todas las MateriasActivas
  getInformacionCompleta(){
    this.idDocente = this.AuthDService.getIdDocente();

    const infoDocente = {
      id_docente: this.idDocente
    }

    this.ContentREAService.allSubject().subscribe(res => {
      this.materia = res as MateriaI[];
      //console.log("1:",this.materia.length);

      this.AuthDService.loadDocente(infoDocente).subscribe(res =>{
        this.resDocente = res as DocenteI;
        this.DocenteInfo = this.resDocente.teacher; 
        console.log('info docente', this.resDocente);
  
        this.AuthDService.loadColegio(this.resDocente.teacher).subscribe(res =>{
          this.resColegio = res as ColegioI;
          this.ColegioInfo = this.resColegio.school;
          console.log('info colegio', this.resColegio);
  
          this.AuthDService.loadAllSubjectActives().subscribe(res =>{
            this.AuthDService.MateriasActivas = res as MateriaActivaI[];
            this.MateriaActivaInfo = res as MateriaActivaVisualizarI[];
  
            for (let i = 0; i < this.AuthDService.MateriasActivas.length; i++) {
              for (let m = 0; m < this.materia.length; m++) {
                if (this.AuthDService.MateriasActivas[i].id_materia == this.materia[m].id_materia) {
                  this.MateriaActivaInfo[i].nombre_materia = this.materia[m].nombre_materia;
                }
              }
            }
          });
        });
      });
    });
  }

  //Crear una MateriaActiva
  CrearMateriaActiva(form: NgForm): void {

    this.AuthDService.loadAllSubjectActives().subscribe(res => {
      this.AuthDService.MateriasActivas = res as MateriaActivaI[];

      //Crear ID MateriaACtiva
      if (this.AuthDService.MateriasActivas.length == 0) {
        this.newIDMA = 0;
      }
      else {
        for (let n = 0; n < this.AuthDService.MateriasActivas.length; n++) {
          for (let i = 0; i < this.AuthDService.MateriasActivas.length; i++) {
            //console.log('n=', n, 'id_CREA=', this.AuthDService.MateriasActivas[i].id_materiaActiva);
            if (this.AuthDService.MateriasActivas.length) {
              this.newIDMA = 0;
            }
            if (n == this.AuthDService.MateriasActivas[i].id_materiaActiva) {
              this.newIDMA = n + 1;
              this.temp = 0;
              i = this.AuthDService.MateriasActivas.length;
            }
            else {
              this.newIDMA = n;
              this.temp = 1;
            }
          }
          if (this.temp == 1) {
            n = this.AuthDService.MateriasActivas.length;
          }
        }
      }

      const newMateriaActiva = {
        id_materiaActiva: this.newIDMA,
        nombre_materiaActiva: form.value.nombre_materiaActiva,
        id_materia: form.value.id_materia,
        id_grado: form.value.id_grado,
        id_docente: this.idDocente,
        id_colegio: 0
      }

      console.log('datosContenido', newMateriaActiva);

      this.AuthDService.createSubjectActive(newMateriaActiva).subscribe(res => {
        console.log(res);
      });
    });
    this.resetForm(form);
  }

  //Almacenar info temporal de una materiaActiva
  saveMateriaActivaData(materiaActivahtml){
    this.materiaActivaToSave = materiaActivahtml;
    console.log("contenido guardado:", this.materiaActivaToSave);
  }

  //Eliminar materiaActiva de Mongo
  deleteMateriaActiva(){
    //console.log("id para eliminar:", this.materiaActivaToSave.id_materiaActiva);
    this.AuthDService.deleteSubjectActive(this.materiaActivaToSave).subscribe(res =>{
      console.log(res);
    });
    this.getInformacionCompleta();
    //window.location.reload();
  }

  //Imprimir datos del docente en el Form 
  getActividadinForm(){
    this.idDocente = this.AuthDService.getIdDocente();

    const infoDocente = {
      id_docente: this.idDocente
    }

    this.AuthDService.loadDocente(infoDocente).subscribe(res =>{
      this.resDocente = res as DocenteI;
      this.AuthDService.selectedDocente = this.resDocente.teacher; 
      console.log('info docente', this.AuthDService.selectedDocente);
    });
  }

  resetPage(){
    window.location.reload();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      window.scrollTo(0, 0);
    }
  }

}
