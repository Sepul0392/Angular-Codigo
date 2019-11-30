import { AuthDService } from '../../services/auth-d.service';
import { ActividadService } from '../../services/actividad.service';
import { ActividadI } from '../../models/actividad';
import { ActividadVisualizaI } from '../../models/actividadVisualizar';
import { EstuadianteI } from '../../models/estudiante';
import { EstuadianteVisualizarI } from '../../models/estudianteVisualizar';
import { CompetenciaI } from '../../models/competencia';
import { MateriaI } from '../../models/materia';
import { TipoContenidoI } from '../../models/tipoContenido';
import { GradoI } from '../../models/grado';
import { EventoI } from '../../models/evento';
import { MetricaI } from '../../models/metrica';
import { MetricaVisualizarI } from '../../models/metricaVisualizar';
import { MetricaActividadI } from '../../models/metricaActividad';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-metricas',
  templateUrl: './metricas.component.html',
  styleUrls: ['./metricas.component.css']
})
export class MetricasComponent implements OnInit {

  actividades:ActividadI[];
  estudiantes:EstuadianteI[];
  materias:MateriaI[];
  grados:GradoI[];
  eventos:EventoI[];
  metricas:MetricaI[];
  metricasVisualizar:MetricaVisualizarI[];
  competencias:CompetenciaI[];
  tipoContenidos:TipoContenidoI[];
  actividadVisualizar:ActividadVisualizaI[];
  estuadianteVisualizar:EstuadianteVisualizarI[];
  actividadToSave:ActividadI;
  metricaToSave:MetricaI;
  metricasActividad:MetricaActividadI;

  id_docenteAuth:number;
  nombre_docenteAuth:string;
  contInicio:number;
  contContenido:number;
  contQuiz:number;
  contTaller:number;
  contEvaluacion:number;
  contNotaQuiz:number;
  contNotaEvaluacion:number;
  contNotaFinal:number;

  bar20:boolean;
  bar40:boolean;
  bar60:boolean;
  bar80:boolean;
  bar100:boolean;

  constructor(private AuthDService: AuthDService, private ActividadService: ActividadService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.id_docenteAuth = this.AuthDService.getIdDocente();
    this.nombre_docenteAuth = this.AuthDService.getnombreApellidoDocente();

    this.bar20 = false;
    this.bar40 = false;
    this.bar60 = false;
    this.bar80 = false;
    this.bar100 = false;

    this.contInicio = 0;
    this.contContenido = 0;
    this.contQuiz = 0;
    this.contTaller = 0;
    this.contEvaluacion = 0;
    this.contNotaQuiz = 0;
    this.contNotaEvaluacion = 0;
    this.contNotaFinal = 0;

    this.getOptions();
    this.getActividades();
  }

  getOptions(){
    this.AuthDService.allSubject().subscribe(res =>{
      this.materias = res as MateriaI[];
    });
    this.AuthDService.allGrade().subscribe(res =>{
      this.grados = res as GradoI[];
    });
    this.ActividadService.allCompetencias().subscribe(res =>{
      this.competencias = res as CompetenciaI[];
    });
  }

  //consultar todos las Actividades y verificar el nombre de la materia, competencia y profesor con sus respectivos ID´s
  getActividades() {
    this.ActividadService.allCompetencias().subscribe(res => {
      this.competencias = res as CompetenciaI[];

      this.ActividadService.allActivities().subscribe(res => {
        //console.log(res);
        this.ActividadService.actividades = res as ActividadI[];
        this.actividadVisualizar = res as ActividadVisualizaI[];
        //console.log(this.ActividadService.actividades.length);

        for (let i = 0; i < this.ActividadService.actividades.length; i++) {
          if (this.ActividadService.actividades[i].id_docente == this.id_docenteAuth) {
            for (let n = 0; n < this.competencias.length; n++) {
              if (this.ActividadService.actividades[i].id_competencia == this.competencias[n].id_competencia) {
                this.actividadVisualizar[i].competencia = this.competencias[n].nombre_competencia;
              }
            }
            for (let p = 0; p < this.materias.length; p++) {
              if (this.ActividadService.actividades[i].id_materia == this.materias[p].id_materia) {
                this.actividadVisualizar[i].materia = this.materias[p].nombre_materia;
              }
            }
            this.actividadVisualizar[i].docente = this.nombre_docenteAuth;
          }
        }
        //console.log("actividades visualizar:", this.actividadVisualizar)
      });
    });
  }

  getMetricasEstudianteModal(metricaEstudianteHTML){
    this.saveDataMetrica(metricaEstudianteHTML);

    this.bar20 = false;
    this.bar40 = false;
    this.bar60 = false;
    this.bar80 = false;
    this.bar100 = false;

    if(metricaEstudianteHTML.check_inicio == 1){
      if(metricaEstudianteHTML.check_contenido == 1){
        if(metricaEstudianteHTML.check_quiz == 1){
          if(metricaEstudianteHTML.check_taller == 1){
            if(metricaEstudianteHTML.check_evaluacion == 1){
              this.bar100 = true;
            }
            else{
              this.bar80 = true;
            }
          }
          else{
            this.bar60 = true;
          }
        }
        else{
          this.bar40 = true;
        }
      }
      else{
        this.bar20 = true;
      }
    }
  }

  //Imprimir datos de la Actividad seleccionanda en el Modal 
  getActividadinModal(actividad: ActividadI) {
    this.ActividadService.selectedActividad = actividad;
    this.saveDataActivity(actividad);
    this.metricasActividad = new MetricaActividadI;

    this.contInicio = 0;
    this.contContenido = 0;
    this.contQuiz = 0;
    this.contTaller = 0;
    this.contEvaluacion = 0;
    this.contNotaQuiz = 0;
    this.contNotaEvaluacion = 0;
    this.contNotaFinal = 0;

    this.metricasActividad.id_metrica = this.actividadToSave.id_actividad;
    this.metricasActividad.id_actividad = this.actividadToSave.id_actividad;
    this.metricasActividad.actividad = this.actividadToSave.titulo_actividad;

    this.AuthDService.loadAllEstudiantes().subscribe(res => {
      this.estudiantes = res as EstuadianteI[];

      this.AuthDService.loadAllEvento().subscribe(res =>{
        this.eventos = res as EventoI[];
  
        for(let n=0; n < this.eventos.length; n++){
          if(this.eventos[n].id_actividad == this.actividadToSave.id_actividad){
            
            this.contInicio = this.contInicio + this.eventos[n].check_fin;
            this.contContenido = this.contContenido + this.eventos[n].check_video;
            this.contQuiz = this.contQuiz + this.eventos[n].check_answer;
            this.contTaller = this.contTaller + this.eventos[n].check_documento;
            

          }
        }
      });
    });
  }

  //Almacenar info temporal de una Actividad
  saveDataActivity(actividadhtml){
    this.actividadToSave = actividadhtml;
    //console.log("actividad guardada:", this.actividadToSave);
  }
  //Almacenar info temporal de una Actividad
  saveDataMetrica(actividadhtml){
    this.metricaToSave = actividadhtml;
    //console.log("actividad guardada:", this.actividadToSave);
  }

}
