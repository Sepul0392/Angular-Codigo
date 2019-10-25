import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ContentREAService } from '../../services/content-rea.service';
import { contenidoREAI } from '../../models/contenidoREA';
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { TipoContenidoI } from '../../models/tipoContenido';


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
  /*modifedtext: string;*/

  constructor(private ContentREAService: ContentREAService, private router: Router) { }

  ngOnInit() {
    this.materia = [
      {id_materia:1,nombre_materia:"matematicas",ano:2019},
      {id_materia:2,nombre_materia:"español",ano:2019},
      {id_materia:3,nombre_materia:"ingles",ano:2019}
    ];
    /*this.materiaSelected=3;*/
    this.grado = [
      {id_grado:10,nombre_grado:"Decimo"},
      {id_grado:11,nombre_grado:"Once"}
    ]

    this.tipoContenido = [
      {id_tipoContenido:1,nombre_tipoContenido:"Video"},
      {id_tipoContenido:2,nombre_tipoContenido:"documento"},
      {id_tipoContenido:3,nombre_tipoContenido:"audio"}
    ]
  }

  onFileChange(e){
    /*console.log('archivo', e)*/
    this.uploadedFiles = e.target.files;
  }
  /*Prueba de Upload
  onUpload(){
    let formData = new FormData();
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append("uploads[]",this.uploadedFiles[i], this.uploadedFiles[i].name);
    }

    this.AuthDService.uploadFile(formData).subscribe((res) => {
      console.log('url-web: ', res)
    });
  }*/

  onSubirContenido(form):void{
    /*
    console.log('text', form.value);
    console.log('materia seleccionada', this.materiaSelected);
    console.log('grado seleccionado', this.gradoSelected);
    console.log('tipoContenido seleccionado', this.tipoContenidoSelected);
    */

    /*para multiples archivos*/
    let formData = new FormData();
    for (let i=0; i < this.uploadedFiles.length; i++){
      formData.append("uploads[]",this.uploadedFiles[i], this.uploadedFiles[i].name)
    }
    
    this.ContentREAService.uploadFile(formData).subscribe((res) => {
      console.log('url-res', res);
      const urlFinal=res.url;
      console.log('urlFinal', urlFinal);
      
      const newContenidoREA = {
        id_CREA: Math.floor((Math.random() * 100) + 1),
        tipo_CREA: this.tipoContenidoSelected,
        id_materia: this.materiaSelected,
        id_grado: this.gradoSelected,
        nombre_CREA: form.value.nombre_CREA,
        urlrepositorio: urlFinal,
        descripcion_CREA: form.value.descripcion_CREA
      }

      console.log('datosContenido', newContenidoREA);

      this.ContentREAService.createContentREA(newContenidoREA).subscribe(res => {
      this.router.navigateByUrl('/inicioProfesores')
      })
    })

    
    
  }

}
