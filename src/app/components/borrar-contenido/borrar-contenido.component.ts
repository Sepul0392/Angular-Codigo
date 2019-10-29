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
  selector: 'app-borrar-contenido',
  templateUrl: './borrar-contenido.component.html',
  styleUrls: ['./borrar-contenido.component.css']
})
export class BorrarContenidoComponent implements OnInit {

  contenidoToSave:contenidoREAI;
  contenidos:contenidoREAI[];
  materia:MateriaI[];
  grado:GradoI[];
  tipoContenido:TipoContenidoI[];
  materiaSelected:number;
  gradoSelected:number;
  tipoContenidoSelected:number;
  contenidoVisualizar:contenidoREAVisualizarI[];

  constructor(private ContentREAService: ContentREAService, private router: Router) { }

  //filterContenido = "";

  ngOnInit() {
    this.getOptions();
    /*this.materia = [
      {id_materia:1,nombre_materia:"Matematicas",id_colegio:0,url_imagen:""},
      {id_materia:2,nombre_materia:"Español",id_colegio:0,url_imagen:""},
      {id_materia:3,nombre_materia:"Ingles",id_colegio:0,url_imagen:""},
      {id_materia:4,nombre_materia:"Sociales",id_colegio:0,url_imagen:""},
      {id_materia:5,nombre_materia:"Fisica",id_colegio:0,url_imagen:""},
      {id_materia:6,nombre_materia:"Biologia",id_colegio:0,url_imagen:""},
      {id_materia:7,nombre_materia:"Quimica",id_colegio:0,url_imagen:""}
    ];*/
    /*this.materiaSelected=3;*/
    /*this.grado = [
      {id_grado:11,nombre_grado:"Once"},
      {id_grado:10,nombre_grado:"Decimo"},
      {id_grado:9,nombre_grado:"Noveno"},
      {id_grado:8,nombre_grado:"Octavo"},
      {id_grado:7,nombre_grado:"Septimo"},
      {id_grado:6,nombre_grado:"Sexto"},
    ]*/
    /*this.tipoContenido = [
      {id_tipoContenido:1,nombre_tipoContenido:"Video"},
      {id_tipoContenido:2,nombre_tipoContenido:"Documento"},
      {id_tipoContenido:3,nombre_tipoContenido:"Audio"}
    ]*/

    this.getContenidos();
  }

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

  saveData(contenidoREAhtml){
    this.contenidoToSave = contenidoREAhtml;
    console.log("contenido guardado:", this.contenidoToSave);
  }

  deleteContenido(){
    console.log("id para eliminar:", this.contenidoToSave.id_CREA);
    this.ContentREAService.deleteContentREA(this.contenidoToSave).subscribe(res =>{
      console.log(res);
    });
    window.location.reload();
  }

}
