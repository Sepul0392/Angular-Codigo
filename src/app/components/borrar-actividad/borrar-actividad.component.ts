import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ContentREAService } from '../../services/content-rea.service';
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { CompetenciaI } from '../../models/competencia';
import { ActividadI } from '../../models/actividad';
import { DocenteI } from '../../models/docente';
import { ActividadVisualizaI } from '../../models/actividadVisualizar';
import { ActividadService } from '../../services/actividad.service';
import { AuthDService } from '../../services/auth-d.service';
import { contenidoREAI } from '../../models/contenidoREA';
import { NgForm } from '@angular/forms';

/**
  * Contiene todos los metodos necesarios para la busqueda y eliminacion de actividades.
  */

@Component({
  selector: 'app-borrar-actividad',
  templateUrl: './borrar-actividad.component.html',
  styleUrls: ['./borrar-actividad.component.css']
})
export class BorrarActividadComponent implements OnInit {

  //Elementos de Busqueda de Contenido
  contenidoToSave:any;
  materia:MateriaI[];
  grado:GradoI[];

  //Elementos de Busqueda de Actividad
  actividadToSave:ActividadI;
  actividad:ActividadI[];
  docente: DocenteI[];
  competencia:CompetenciaI[];
  gradoSelecteA:number;
  materiaSelectedA:number;
  docenteSelectedA:number;
  competenciaSelectedA:number;
  actividadVisualizar:ActividadVisualizaI[];

  id_docenteAuth:number;
  correcto:boolean;
  mensaje:boolean;

  constructor(private AuthDService: AuthDService, private ActividadService: ActividadService, private ContentREAService: ContentREAService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.comprobacionLogin();

    this.correcto = false;
    this.mensaje = false;

    this.id_docenteAuth = this.AuthDService.getIdDocente() as number;
    this.getOptions();
    this.getActividades();
  }

  /**
  * Permite obtener los datos de todos los options
  */
  getOptions(){
    this.ContentREAService.allSubject().subscribe(res =>{
      this.materia = res as MateriaI[];
    });
    this.ContentREAService.allGrade().subscribe(res =>{
      this.grado = res as GradoI[];
    });
    this.ActividadService.allCompetencias().subscribe(res =>{
      this.competencia = res as CompetenciaI[];
    });
    this.ActividadService.allDocente().subscribe(res =>{
      this.docente = res as DocenteI[];
    });
  }

  /**
  * Permite obtener la informacion y listado de todas las Actividades
  */
  getActividades() {
    this.ActividadService.allCompetencias().subscribe(res => {
      this.competencia = res as CompetenciaI[];

      this.ActividadService.allDocente().subscribe(res => {
        this.docente = res as DocenteI[];

        this.ActividadService.allActivities().subscribe(res => {
          //console.log(res);
          this.ActividadService.actividades = res as ActividadI[];
          this.actividadVisualizar = res as ActividadVisualizaI[];
          this.actividadVisualizar.reverse();
          //console.log(this.ActividadService.actividades.length);

          for (let i = 0; i < this.ActividadService.actividades.length; i++) {
            for (let n = 0; n < this.competencia.length; n++) {
              if (this.ActividadService.actividades[i].id_competencia == this.competencia[n].id_competencia) {
                this.actividadVisualizar[i].competencia = this.competencia[n].nombre_competencia;
              }
            }
            for (let m = 0; m < this.docente.length; m++) {
              if (this.ActividadService.actividades[i].id_docente == this.docente[m].id_docente) {
                this.actividadVisualizar[i].docente = (this.docente[m].nombre_docente + " " + this.docente[m].apellido_docente);
              }
            }
            for (let p = 0; p < this.materia.length; p++) {
              if (this.ActividadService.actividades[i].id_materia == this.materia[p].id_materia) {
                this.actividadVisualizar[i].materia = this.materia[p].nombre_materia;
              }
            }
          }
          //console.log("actividades visualizar:", this.actividadVisualizar)
        });
      });
    });
  }

  /**
  * Permite almacenar la informacion de una Actividad de forma temporal
  */
  saveDataActivity(actividadhtml){
    this.actividadToSave = actividadhtml;
    //console.log('actividad guardada:', this.actividadToSave);
  }

  /**
  * Permite desvincular el Contenido de la Actividad que se eliminara
  */
  BusquedaYCambioEstadoContent(id_contenido){
    const id_contenidoBusqueda = {
      id_contenidoREA: id_contenido
    }

    this.ContentREAService.loadContentREA(id_contenidoBusqueda).subscribe(res => {
      this.contenidoToSave = res as contenidoREAI;
      //console.log('contenido encontrado', this.contenidoToSave);

      const infoContenidoREA = {
        id_CREA: id_contenido,
        en_uso: (this.contenidoToSave.content.en_uso - 1)
      }
      this.ContentREAService.uploadEstadoContentREA(infoContenidoREA).subscribe(res => {
        //console.log(res);
      });
    });
  }

  /**
  * Permite eliminar una Actividad
  */
  deleteActividad(){
    this.correcto = false;
    this.mensaje = true;
    //console.log("id para eliminar:", this.actividadToSave.id_actividad);
    this.BusquedaYCambioEstadoContent(this.actividadToSave.id_contenidoREA);
    this.BusquedaYCambioEstadoContent(this.actividadToSave.id_taller);

    this.ActividadService.deleteActivity(this.actividadToSave).subscribe(res =>{
      //console.log(res);
      this.correcto = true;
      this.mensaje = false;
      this.getActividades();
    });
    //window.location.reload();
  }

  /**
  * Permite comprobar que el profesor se encuentra logueado en el sistema al ingresar a la pagina
  */
  comprobacionLogin(){
    if (this.AuthDService.getIdDocente()){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
