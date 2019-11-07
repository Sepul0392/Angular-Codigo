import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ContentREAService } from '../../services/content-rea.service';
import { contenidoREAI } from '../../models/contenidoREA';
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { TipoContenidoI } from '../../models/tipoContenido';
import { contenidoREAVisualizarI } from '../../models/contenidoREAVisualizar';
import { CompetenciaI } from '../../models/competencia';
import { ActividadI } from '../../models/actividad';
import { DocenteI } from '../../models/docente';
import { ActividadService } from '../../services/actividad.service';
import { AuthDService } from '../../services/auth-d.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  //Elementos de Busqueda de Contenido
  contenidoToSave:contenidoREAI;
  contenidos:contenidoREAI[];
  materia:MateriaI[];
  grado:GradoI[];
  tipoContenido:TipoContenidoI[];
  materiaSelected:number;
  gradoSelected:number;
  tipoContenidoSelected:number;
  contenidoVisualizar:contenidoREAVisualizarI[];

  //Elementos de Creacion de Actividad
  actividadToSave:ActividadI;
  actividad:ActividadI[];
  docente: DocenteI[];
  competencia:CompetenciaI[];
  gradoSelectedA:number;
  materiaSelectedA:number;
  docenteSelectedA:number;
  competenciaSelectedA:number;
  respuestaCorrectaSelected:number;
  newID: number;
  temp: number;

  id_docenteAuth:number;
  videoOpt:number;
  urlvideoOpt:string;
  documentoOpt:number;
  urldocumentoOpt:string;
  audioOpt:number;
  urlaudioOpt:string;
  htmlOpt:number;
  urlhtmlOpt:string;
  respuestaCorrectaSelected1:number;
  respuestaCorrectaSelected2:number;
  respuestaCorrectaSelected3:number;

  constructor(private AuthDService: AuthDService, private ActividadService: ActividadService, private ContentREAService: ContentREAService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.getOptions();
    this.getContenidos();
    this.id_docenteAuth = this.AuthDService.getIdDocente() as number;
  }

  //Obtener los datos de los Options
  getOptions(){
    this.ContentREAService.allSubject().subscribe(res =>{
      this.materia = res as MateriaI[];
    });
    this.ContentREAService.allGrade().subscribe(res =>{
      this.grado = res as GradoI[];
    });
    this.ContentREAService.allType().subscribe(res =>{
      this.tipoContenido = res as TipoContenidoI[];
    });
    this.ActividadService.allCompetencias().subscribe(res =>{
      this.competencia = res as CompetenciaI[];
    });
    this.ActividadService.allDocente().subscribe(res =>{
      this.docente = res as DocenteI[];
    });
  }

  //consultar todos los ContenidosREA y verificar el nombre de la materia y contenido con sus respectivos ID´s
  getContenidos() {
    this.ContentREAService.allSubject().subscribe(res => {
      this.materia = res as MateriaI[];

      this.ContentREAService.allType().subscribe(res => {
        this.tipoContenido = res as TipoContenidoI[];

        this.ContentREAService.allContent().subscribe(res => {
          //console.log(res);
          this.ContentREAService.contenidosREA = res as contenidoREAI[];
          this.contenidoVisualizar = res as contenidoREAVisualizarI[];
          //console.log(this.ContentREAService.contenidosREA.length);

          for (let i = 0; i < this.ContentREAService.contenidosREA.length; i++) {
            for (let n = 0; n < this.tipoContenido.length; n++) {
              if (this.ContentREAService.contenidosREA[i].tipo_CREA == this.tipoContenido[n].id_tipoContenido) {
                this.contenidoVisualizar[i].nombre_tipo_CREA = this.tipoContenido[n].nombre_tipoContenido;
              }
            }
            for (let m = 0; m < this.materia.length; m++) {
              if (this.ContentREAService.contenidosREA[i].id_materia == this.materia[m].id_materia) {
                this.contenidoVisualizar[i].materia = this.materia[m].nombre_materia;
              }
            }
          }
          console.log("contenido visualizar final:", this.contenidoVisualizar)
        });
      });
    });
  }

  //Consultar todas las actividades en Mongo
  getActividades(){
    this.ActividadService.allActivities().subscribe(res =>{
      //console.log(res);
      this.ActividadService.actividades = res as ActividadI[];
    });
  }

  //Crear Actividad en Mongo
  onCrearActividad(form: NgForm): void {
    
    //Generar ID
    this.ActividadService.allActivities().subscribe(res =>{
      //console.log(res);
      this.ActividadService.actividades = res as ActividadI[];
      console.log('Actividades', this.ActividadService.actividades);

      for (let n = 0; n < this.ActividadService.actividades.length; n++) {
        for (let i = 0; i < this.ActividadService.actividades.length; i++) {
          //console.log('n=', n, 'id_CREA=', this.ActividadService.actividades[i].id_actividad);
          if (n == this.ActividadService.actividades[i].id_actividad) {
            this.newID = n + 1;
            this.temp = 0;
            i = this.ActividadService.actividades.length;
          }
          else {
            this.newID = n;
            this.temp = 1;
          }
        }
        if (this.temp == 1) {
          n = this.ActividadService.actividades.length;
        }
      }

      if(this.contenidoToSave.tipo_CREA == 1){
        this.videoOpt = 1;
        this.urlvideoOpt = this.contenidoToSave.urlrepositorio;
        this.documentoOpt = 0;
        this.urldocumentoOpt = "";
        this.audioOpt = 0;
        this.urlaudioOpt = "";
        this.htmlOpt = 0;
        this.urlhtmlOpt = "";
      }
      if(this.contenidoToSave.tipo_CREA == 2){
        this.videoOpt = 0;
        this.urlvideoOpt = "";
        this.documentoOpt = 1;
        this.urldocumentoOpt = this.contenidoToSave.urlrepositorio;
        this.audioOpt = 0;
        this.urlaudioOpt = "";
        this.htmlOpt = 0;
        this.urlhtmlOpt = "";
      }
      if(this.contenidoToSave.tipo_CREA == 3){
        this.videoOpt = 0;
        this.urlvideoOpt = "";
        this.documentoOpt = 0;
        this.urldocumentoOpt = "";
        this.audioOpt = 1;
        this.urlaudioOpt = this.contenidoToSave.urlrepositorio;
        this.htmlOpt = 0;
        this.urlhtmlOpt = "";
      }
      if(this.contenidoToSave.tipo_CREA == 4){
        this.videoOpt = 0;
        this.urlvideoOpt = "";
        this.documentoOpt = 0;
        this.urldocumentoOpt = "";
        this.audioOpt = 0;
        this.urlaudioOpt = "";
        this.htmlOpt = 1;
        this.urlhtmlOpt = this.contenidoToSave.urlrepositorio;
      }

      //console.log("prueba:", form.value.nombre_actividad);

      const newActividad = {
        //id_CREA: Math.floor((Math.random() * 100) + 1),
        id_actividad: this.newID,
        id_colegio: 0,
        id_docente: this.id_docenteAuth,
        id_materia: this.materiaSelectedA,
        id_grado: this.gradoSelectedA,
        id_competencia: this.competenciaSelectedA,
        titulo_actividad: form.value.nombre_actividad,
        descripcion_actividad: form.value.descripcion_actividad,
        id_contenidoREA: this.contenidoToSave.id_CREA,
        video: this.videoOpt,
        urlvideo: this.urlvideoOpt,
        documento: this.documentoOpt,
        urldocumento: this.urldocumentoOpt,
        audio: this.audioOpt,
        urlaudio: this.urlaudioOpt,
        html: this.htmlOpt,
        urlhtml: this.urlhtmlOpt,
        descripcion_test: form.value.descripcion_quiz,
        Q1: form.value.preguntaQ1,
        A11: form.value.respuesta11,
        A12: form.value.respuesta12,
        A13: form.value.respuesta13,
        A14: form.value.respuesta14,
        CA1: this.respuestaCorrectaSelected1,
        Q2: form.value.preguntaQ2,
        A21: form.value.respuesta21,
        A22: form.value.respuesta22,
        A23: form.value.respuesta23,
        A24: form.value.respuesta24,
        CA2: this.respuestaCorrectaSelected2,
        Q3: form.value.preguntaQ3,
        A31: form.value.respuesta31,
        A32: form.value.respuesta32,
        A33: form.value.respuesta33,
        A34: form.value.respuesta34,
        CA3: this.respuestaCorrectaSelected3
      }

      console.log('datosActividad', newActividad);

      this.ActividadService.createActivity(newActividad).subscribe(res => {
        //window.location.reload();
        this.resetForm(form);
      })
    });
  }

  //Almacenar info temporal de un ContenidoREA
  saveDataContent(contenidoREAhtml){
    this.contenidoToSave = contenidoREAhtml;
    console.log("contenido guardado:", this.contenidoToSave);
  }

  //Resetear pagina
  resetPage(){
    window.location.reload();
  }

  //resetear Formulario
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      window.scrollTo(0, 0);
    }
  }
  
}
