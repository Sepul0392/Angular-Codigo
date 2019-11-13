import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ContentREAService } from '../../services/content-rea.service';
import { contenidoREAI } from '../../models/contenidoREA';
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { TipoContenidoI } from '../../models/tipoContenido';
import { AuthDService } from '../../services/auth-d.service';
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
  id_docenteAuth:number;

  constructor(private AuthDService: AuthDService, private ContentREAService: ContentREAService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    
    this.getOptions();
    this.getContenidos();
    this.id_docenteAuth = this.AuthDService.getIdDocente() as number;
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
        if(this.ContentREAService.contenidosREA.length == 0){
          this.newID = 1;
        }
        else {
          for (let n = 0; n < this.ContentREAService.contenidosREA.length; n++) {
            for (let i = 0; i < this.ContentREAService.contenidosREA.length; i++) {
              //console.log('n=', n, 'id_CREA=', this.ContentREAService.contenidosREA[i].id_CREA);
              if (this.ContentREAService.contenidosREA.length) {
                this.newID = 1;
              }
              if (n+1 == this.ContentREAService.contenidosREA[i].id_CREA) {
                this.newID = n + 2;
                this.temp = 0;
                i = this.ContentREAService.contenidosREA.length;
              }
              else {
                this.newID = n + 1;
                this.temp = 1;
              }
            }
            if (this.temp == 1) {
              n = this.ContentREAService.contenidosREA.length + 1;
            }
          }
        }


        const newContenidoREA = {
          //id_CREA: Math.floor((Math.random() * 100) + 1),
          id_CREA: this.newID,
          tipo_CREA: this.tipoContenidoSelected,
          id_docente: this.id_docenteAuth,
          id_materia: this.materiaSelected,
          id_grado: this.gradoSelected,
          nombre_CREA: form.value.nombre_CREA,
          urlrepositorio: this.urlSelected.url,
          descripcion_CREA: form.value.descripcion_CREA,
          en_uso: 0
        }

        console.log('datosContenido', newContenidoREA);

        this.ContentREAService.createContentREA(newContenidoREA).subscribe(res => {
        //this.router.navigateByUrl('/inicioProfesores')
        this.resetForm(form);
        });
      });
    });
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
