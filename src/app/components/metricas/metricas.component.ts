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
  metricaVisualizarToSave:MetricaVisualizarI;
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
  divisorCont:number;
  notaA1:number; notaA2:number; notaA3:number; notaEA1:number; notaEA2:number; notaEA3:number;
  bar20:boolean; bar40:boolean; bar60:boolean; bar80:boolean; bar100:boolean; 

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

    this.metricasActividad = {id_metrica:0, id_actividad:0, nota_quiz:0, nota_evaluacion:0, 
                              nota_final:0, inicio:0, contenido:0, quiz:0, taller:0, evaluacion:0};
    this.metricaVisualizarToSave = new MetricaVisualizarI;

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

  getAvanceEstudianteModal(metricaEstudiante){
    this.saveDataMetrica(metricaEstudiante);

    this.bar20 = false;
    this.bar40 = false;
    this.bar60 = false;
    this.bar80 = false;
    this.bar100 = false;

    if(metricaEstudiante.check_inicio == 1){
      if(metricaEstudiante.check_contenido == 1){
        if(metricaEstudiante.check_quiz == 1){
          if(metricaEstudiante.check_taller == 1){
            if(metricaEstudiante.check_evaluacion == 1){
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

  //Imprimir Metricas de la Actividad seleccionanda en el Modal 
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
    this.divisorCont = 0;

    this.notaA1 = 0; this.notaA2 = 0; this.notaA3 = 0; this.notaEA1 = 0; this.notaEA2 = 0; this.notaEA3 = 0;

    this.metricasActividad.id_metrica = this.actividadToSave.id_actividad;
    this.metricasActividad.id_actividad = this.actividadToSave.id_actividad;

    this.AuthDService.loadAllEstudiantes().subscribe(res => {
      this.estudiantes = res as EstuadianteI[];

      this.AuthDService.loadAllEvento().subscribe(res =>{
        this.eventos = res as EventoI[];
  
        if(this.eventos.length){
          for(let n=0; n < this.eventos.length; n++){
            if(this.eventos[n].id_actividad == this.actividadToSave.id_actividad){
              this.divisorCont = this.divisorCont + 1;
  
              //pasar datos del evento a metricas
              this.metricas[n].id_metrica = this.eventos[n].id_evento;
              this.metricas[n].id_evento = this.eventos[n].id_evento;
              this.metricas[n].id_actividad = this.actividadToSave.id_actividad;
              this.metricas[n].id_estudiante = this.eventos[n].id_estudiante;
              this.metricas[n].check_inicio = this.eventos[n].check_inicio;
              this.metricas[n].check_contenido = this.eventos[n].check_video;
              this.metricas[n].check_quiz = this.eventos[n].check_answer;
              this.metricas[n].check_taller = this.eventos[n].check_download;
              if(this.eventos[n].check_Ea1 && 0 < this.eventos[n].check_Ea1){
                this.metricas[n].check_evaluacion = 1;
              }
              
              //contadores
              this.contInicio = this.contInicio + this.eventos[n].check_fin;
              this.contContenido = this.contContenido + this.eventos[n].check_video;
              this.contQuiz = this.contQuiz + this.eventos[n].check_answer;
              this.contTaller = this.contTaller + this.eventos[n].check_documento;
              if(this.eventos[n].check_Ea1 && 0 < this.eventos[n].check_Ea1){
                this.contEvaluacion = this.contEvaluacion + 1; 
              }
  
              //Evaluar respuestas del evento
              if(this.eventos[n].check_a1 == this.actividadToSave.CA1){
                this.notaA1 = 5;
              }
              if(this.eventos[n].check_a2 == this.actividadToSave.CA2){
                this.notaA2 = 5;
              }
              if(this.eventos[n].check_a3 == this.actividadToSave.CA3){
                this.notaA3 = 5;
              }
              if(this.eventos[n].check_Ea1 == this.actividadToSave.ECA1){
                this.notaEA1 = 5;
              }
              if(this.eventos[n].check_Ea2 == this.actividadToSave.ECA2){
                this.notaEA2 = 5;
              }
              if(this.eventos[n].check_Ea3 == this.actividadToSave.ECA3){
                this.notaEA1 = 5;
              }
  
              this.metricas[n].nota_quiz = (this.notaA1 + this.notaA2 + this.notaA3)/3;
              this.metricas[n].nota_evaluacion = (this.notaEA1 + this.notaEA2 + this.notaEA3)/3;
              this.metricas[n].nota_final = (this.metricas[n].nota_quiz + this.metricas[n].nota_evaluacion)/2; 
  
              this.contNotaQuiz = this.contNotaQuiz + this.metricas[n].nota_quiz;
              this.contNotaEvaluacion = this.contNotaEvaluacion + this.metricas[n].nota_evaluacion;
              this.contNotaFinal = this.contNotaFinal + this.metricas[n].nota_final;
            }
          }
  
          this.metricasActividad.nota_quiz = this.contNotaQuiz/this.divisorCont;
          this.metricasActividad.nota_evaluacion = this.contNotaEvaluacion/this.divisorCont;
          this.metricasActividad.nota_final = this.contNotaFinal/this.divisorCont;
          this.metricasActividad.inicio = this.contInicio;
          this.metricasActividad.contenido = this.contContenido;
          this.metricasActividad.quiz = this.contQuiz;
          this.metricasActividad.taller = this.contTaller;
          this.metricasActividad.evaluacion = this.contEvaluacion;
  
          //Creacion Metricas para Visualizar
          this.metricasVisualizar = this.metricas as MetricaVisualizarI[];
  
          for(let x; x < this.metricas.length; x++){
            this.metricasVisualizar[x].actividad = this.actividadToSave.titulo_actividad;
            for(let m; m < this.estudiantes.length; m++){
              if(this.metricasVisualizar[x].id_estudiante == this.estudiantes[m].id_estudiante){
                this.metricasVisualizar[x].estudiante = this.estudiantes[m].nombre_estudiante+" "+this.estudiantes[m].apellido_estudiante;
              }
            }
            if(this.metricasVisualizar[x].check_inicio == 1){
              this.metricasVisualizar[x].inicio = "Si";
            }
            else{
              this.metricasVisualizar[x].inicio = "No"
            }
            if(this.metricasVisualizar[x].check_contenido == 1){
              this.metricasVisualizar[x].contenido = "Si";
            }
            else{
              this.metricasVisualizar[x].contenido = "No"
            }
            if(this.metricasVisualizar[x].check_quiz == 1){
              this.metricasVisualizar[x].quiz = "Si";
            }
            else{
              this.metricasVisualizar[x].quiz = "No"
            }
            if(this.metricasVisualizar[x].check_taller == 1){
              this.metricasVisualizar[x].taller = "Si";
            }
            else{
              this.metricasVisualizar[x].taller = "No"
            }
            if(this.metricasVisualizar[x].check_evaluacion == 1){
              this.metricasVisualizar[x].evaluacion = "Si";
            }
            else{
              this.metricasVisualizar[x].evaluacion = "No"
            }
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
  saveDataMetrica(metricahtml){
    this.metricaToSave = metricahtml;
    //console.log("actividad guardada:", this.actividadToSave);
  }
  //Almacenar info temporal de una Actividad
  saveDataMetricaVisualizar(metricavisualizarhtml){
    this.metricaVisualizarToSave = metricavisualizarhtml;
    //console.log("actividad guardada:", this.actividadToSave);
  }
}
