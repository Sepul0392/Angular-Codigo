import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ContentREAService } from '../../services/content-rea.service';
import { contenidoREAI } from '../../models/contenidoREA';
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { TipoContenidoI } from '../../models/tipoContenido';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-borrar-contenido',
  templateUrl: './borrar-contenido.component.html',
  styleUrls: ['./borrar-contenido.component.css']
})
export class BorrarContenidoComponent implements OnInit {

  contenido:contenidoREAI[];
  materia:MateriaI[];
  grado:GradoI[];
  tipoContenido:TipoContenidoI[];
  materiaSelected:number;
  gradoSelected:number;
  tipoContenidoSelected:number;


  constructor(private ContentREAService: ContentREAService, private router: Router) { }

  ngOnInit() {
    this.materia = [
      {id_materia:1,nombre_materia:"Matematicas"},
      {id_materia:2,nombre_materia:"Español"},
      {id_materia:3,nombre_materia:"Ingles"},
      {id_materia:4,nombre_materia:"Sociales"},
      {id_materia:5,nombre_materia:"Fisica"},
      {id_materia:6,nombre_materia:"Biologia"},
      {id_materia:7,nombre_materia:"Quimica"}
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
