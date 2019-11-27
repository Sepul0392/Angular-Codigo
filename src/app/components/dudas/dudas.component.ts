import { GradoI } from '../../models/grado';
import { AuthDService } from '../../services/auth-d.service';
import { MateriaI } from '../../models/materia';
import { ActividadI } from '../../models/actividad';
import { EstuadianteI } from '../../models/estudiante';
import { DudaI } from '../../models/duda';
import { DudaVisualizarI } from '../../models/dudaVisualizar';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-dudas',
  templateUrl: './dudas.component.html',
  styleUrls: ['./dudas.component.css']
})
export class DudasComponent implements OnInit {

  materias:MateriaI[];
  grados:GradoI[];
  actividades:ActividadI[];
  estudiantes:EstuadianteI[];
  dudas:DudaI[];
  dudasVisualizar:DudaVisualizarI[];
  dudaToSave:DudaI;
  correcto1:boolean;
  correcto2:boolean;
  error1:boolean;
  error2:boolean;

  constructor(private router: Router, private AuthDService: AuthDService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.correcto1 = false;
    this.correcto2 = false;
    this.error1 = false;
    this.error2 = false;

    this.getOptions();
  }

  getOptions(){
    this.AuthDService.allGrade().subscribe(res => {
      this.grados = res as GradoI[];
    });

    this.AuthDService.loadAllEstudiantes().subscribe(res => {
      this.estudiantes = res as EstuadianteI[];

      this.AuthDService.allSubject().subscribe(res => {
        this.materias = res as MateriaI[];
      
        this.AuthDService.allActivities().subscribe(res => {
          this.actividades = res as ActividadI[];
        
          this.AuthDService.loadAllDudas().subscribe(res => {
            this.AuthDService.Dudas = res as DudaI[];
            this.dudasVisualizar = res as DudaVisualizarI[];
          
            for (let i = 0; i < this.AuthDService.Dudas.length; i++) {
              for (let n = 0; n < this.estudiantes.length; n++) {
                if (this.AuthDService.Dudas[i].id_estudiante == this.estudiantes[n].id_estudiante) {
                  this.dudasVisualizar[i].estudiante = this.estudiantes[n].nombre_estudiante+" "+this.estudiantes[n].apellido_estudiante;
                  n = this.estudiantes.length;
                }
              }
              for (let n = 0; n < this.actividades.length; n++) {
                if (this.AuthDService.Dudas[i].id_actividad == this.actividades[n].id_actividad) {
                  for(let o = 0; o < this.materias.length; o++){
                    if(this.actividades[n].id_materia == this.materias[o].id_materia){
                      this.dudasVisualizar[i].materia = this.materias[o].nombre_materia;
                    }
                  }
                  this.dudasVisualizar[i].nombre_actividad = this.actividades[n].titulo_actividad;
                  this.dudasVisualizar[i].grado = this.actividades[n].id_grado;
                  n = this.estudiantes.length;
                }
              }
            }
            console.log('prueba', this.dudasVisualizar);
          });
        });
      });
    });
  }
}
