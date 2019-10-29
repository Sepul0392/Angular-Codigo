import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ContentREAService } from '../../services/content-rea.service';
import { contenidoREAI } from '../../models/contenidoREA';
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { TipoContenidoI } from '../../models/tipoContenido';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-crear-actividad',
  templateUrl: './crear-actividad.component.html',
  styleUrls: ['./crear-actividad.component.css']
})
export class CrearActividadComponent implements OnInit {

  contenido:contenidoREAI[];
  materia:MateriaI[];
  grado:GradoI[];
  tipoContenido:TipoContenidoI[];
  materiaCSelected:number;
  gradoCSelected:number;
  tipoContenidoCSelected:number;
  materiaASelected:number;
  gradoASelected:number;
  competenciaSelected:number;

  constructor(private ContentREAService: ContentREAService, private router: Router) { }

  ngOnInit() {
    this.materia = [
      {id_materia:1,nombre_materia:"Matematicas",id_colegio:0,url_imagen:""},
      {id_materia:2,nombre_materia:"Español",id_colegio:0,url_imagen:""},
      {id_materia:3,nombre_materia:"Ingles",id_colegio:0,url_imagen:""},
      {id_materia:4,nombre_materia:"Sociales",id_colegio:0,url_imagen:""},
      {id_materia:5,nombre_materia:"Fisica",id_colegio:0,url_imagen:""},
      {id_materia:6,nombre_materia:"Biologia",id_colegio:0,url_imagen:""},
      {id_materia:7,nombre_materia:"Quimica",id_colegio:0,url_imagen:""}
    ];
    /*this.materiaSelected=3;*/
    this.grado = [
      {id_grado:11,nombre_grado:"Once"},
      {id_grado:10,nombre_grado:"Decimo"},
      {id_grado:9,nombre_grado:"Noveno"},
      {id_grado:8,nombre_grado:"Octavo"},
      {id_grado:7,nombre_grado:"Septimo"},
      {id_grado:6,nombre_grado:"Sexto"},
    ]

    this.tipoContenido = [
      {id_tipoContenido:1,nombre_tipoContenido:"Video"},
      {id_tipoContenido:2,nombre_tipoContenido:"Documento"},
      {id_tipoContenido:3,nombre_tipoContenido:"Audio"}
    ]
  }

}
