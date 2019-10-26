import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ContentREAService } from '../../services/content-rea.service';
import { contenidoREAI } from '../../models/contenidoREA';
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { TipoContenidoI } from '../../models/tipoContenido';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subir-contenido',
  templateUrl: './subir-contenido.component.html',
  styleUrls: ['./subir-contenido.component.css']
})
export class SubirContenidoComponent implements OnInit {

  contenido:contenidoREAI[];
  materia:MateriaI[];
  grado:GradoI[];
  tipoContenido:TipoContenidoI[];
  materiaSelected:number;
  gradoSelected:number;
  tipoContenidoSelected:number;
  uploadedFiles: Array <File>;
  urlFinal:string;
  urlSelected:any;

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

  //Cargar archivo a subir
  onFileChange(e){
    /*console.log('archivo', e)*/
    this.uploadedFiles = e.target.files;
  }

  //Funcion leer y subir informacion y archivo del formulario a Mongo
  onSubirContenido(form):void{
    /*console.log('text', form.value);
    console.log('materia seleccionada', this.materiaSelected);
    console.log('grado seleccionado', this.gradoSelected);
    console.log('tipoContenido seleccionado', this.tipoContenidoSelected);
    */

    const nombre_CREA:any = form.value.nombre_CREA;
    const descripcion_CREA:any = form.value.descripcion_CREA;

    /*para subir multiples archivos*/
    let formData = new FormData();
    for (let i=0; i < this.uploadedFiles.length; i++){
      formData.append("uploads[]",this.uploadedFiles[i], this.uploadedFiles[i].name)
    }
    
    this.ContentREAService.uploadFile(formData).subscribe((res) => {
      console.log('url-res', res);
      this.urlSelected =res;
      console.log('urlFinal', this.urlSelected.url);
      
      const newContenidoREA = {
        id_CREA: Math.floor((Math.random() * 100) + 1),
        tipo_CREA: this.tipoContenidoSelected,
        id_materia: this.materiaSelected,
        id_grado: this.gradoSelected,
        nombre_CREA: nombre_CREA,
        urlrepositorio: this.urlSelected.url,
        descripcion_CREA: descripcion_CREA
      }

      console.log('datosContenido', newContenidoREA);

      this.ContentREAService.createContentREA(newContenidoREA).subscribe(res => {
      this.router.navigateByUrl('/inicioProfesores')
      })
    })

  }
  
}
