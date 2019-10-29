import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ContentREAService } from '../../services/content-rea.service';
import { contenidoREAI } from '../../models/contenidoREA';
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { TipoContenidoI } from '../../models/tipoContenido';
import { contenidoREAVisualizarI } from '../../models/contenidoREAVisualizar';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

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

  //Elementos de Busqueda de Actividad

  constructor(private ContentREAService: ContentREAService, private router: Router) { }

  ngOnInit() {
    this.getOptions();
    this.getContenidos();
  }

  //Obtener los datos de los options
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
  }

  //consultar todos los ContenidosREA y verificar el nombre de la materia y contenido con sus respectivos ID´s
  getContenidos(){
    this.ContentREAService.allContent().subscribe(res =>{
      console.log(res);
      this.ContentREAService.contenidosREA = res as contenidoREAI[];
      this.contenidoVisualizar = res as contenidoREAVisualizarI[];
      
      for (let i=0; i < this.ContentREAService.contenidosREA.length; i++){
        for (let n=0; n < this.tipoContenido.length; n++){
          if(this.ContentREAService.contenidosREA[i].tipo_CREA == this.tipoContenido[n].id_tipoContenido){
            this.contenidoVisualizar[i].nombre_tipo_CREA = this.tipoContenido[n].nombre_tipoContenido;
          }
        }
        for (let m=0; m < this.materia.length; m++){
          if(this.ContentREAService.contenidosREA[i].id_materia == this.materia[m].id_materia){
            this.contenidoVisualizar[i].materia = this.materia[m].nombre_materia;
          }
        }
      }
      console.log("contenido visualizar:", this.contenidoVisualizar)
    });
  }

  //Almacenar info temporal de un ContenidoREA
  saveDataContent(contenidoREAhtml){
    this.contenidoToSave = contenidoREAhtml;
    console.log("contenido guardado:", this.contenidoToSave);
  }


}
