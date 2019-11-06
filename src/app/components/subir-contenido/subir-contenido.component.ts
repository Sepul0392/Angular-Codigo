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
  newID: number;
  temp: number;

  constructor(private ContentREAService: ContentREAService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    
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
      //console.log(res);
      this.ContentREAService.contenidosREA = res as contenidoREAI[];
    });
  }

  //Cargar archivo a subir
  onFileChange(e){
    /*console.log('archivo', e)*/
    this.uploadedFiles = e.target.files;
  }

  //Funcion leer y subir informacion y archivo del formulario a Mongo
  onSubirContenido(form: NgForm):void{
    /*console.log('text', form.value);
    console.log('materia seleccionada', this.materiaSelected);
    console.log('grado seleccionado', this.gradoSelected);
    console.log('tipoContenido seleccionado', this.tipoContenidoSelected);
    */

    /*para subir multiples archivos*/
    let formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name)
    }

    this.ContentREAService.uploadFile(formData).subscribe((res) => {
      console.log('url-res', res);
      this.urlSelected = res;
      console.log('urlFinal', this.urlSelected.url);

      this.ContentREAService.allContent().subscribe(res => {
        //console.log(res);
        this.ContentREAService.contenidosREA = res as contenidoREAI[];

        //Generar ID
        //console.log('Contenidos',  this.ContentREAService.contenidosREA);
        for (let n = 0; n < this.ContentREAService.contenidosREA.length; n++) {
          for (let i = 0; i < this.ContentREAService.contenidosREA.length; i++) {
            //console.log('n=', n, 'id_CREA=', this.ContentREAService.contenidosREA[i].id_CREA);
            if (n == this.ContentREAService.contenidosREA[i].id_CREA) {
              this.newID = n + 1;
              this.temp = 0;
              i = this.ContentREAService.contenidosREA.length;
            }
            else {
              this.newID = n;
              this.temp = 1;
            }
          }
          if (this.temp == 1) {
            n = this.ContentREAService.contenidosREA.length;
          }
        }

        const newContenidoREA = {
          //id_CREA: Math.floor((Math.random() * 100) + 1),
          id_CREA: this.newID,
          tipo_CREA: this.tipoContenidoSelected,
          id_materia: this.materiaSelected,
          id_grado: this.gradoSelected,
          nombre_CREA: form.value.nombre_CREA,
          urlrepositorio: this.urlSelected.url,
          descripcion_CREA: form.value.descripcion_CREA
        }

        console.log('datosContenido', newContenidoREA);

        this.ContentREAService.createContentREA(newContenidoREA).subscribe(res => {
        //this.router.navigateByUrl('/inicioProfesores')
        this.resetForm(form);
        })
      });
    })
  }

  resetPage(){
    window.location.reload();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      window.scrollTo(0, 0);
      //this.ContentREAService.selectedContenidoREA = new contenidoREAI();
    }
  }
  
}
