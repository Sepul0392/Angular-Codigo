import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { AuthDService } from '../../services/auth-d.service';
import { ContentREAService } from '../../services/content-rea.service';
import { DocenteI } from '../../models/docente';
import { MateriaActivaI } from '../../models/materiaActiva';
import { ColegioI } from '../../models/colegio';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  //Elementos
  materia:MateriaI[];
  grado:GradoI[];
  colegios:ColegioI[];
  newContD: number;
  newIDD:number;
  newIDMA: number;
  temp1: number;
  temp2: number;
  urlTemp:string;

  constructor(private ContentREAService: ContentREAService, private AuthDService: AuthDService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.getOptions();
  }

  //Obtener los datos de los options
  getOptions(){
    this.ContentREAService.allSubject().subscribe(res =>{
      this.materia = res as MateriaI[];
      //console.log("1:",this.materia.length);
    });
    this.ContentREAService.allGrade().subscribe(res =>{
      this.grado = res as GradoI[];
    });
    this.AuthDService.loadAllColegios().subscribe(res =>{
      this.colegios = res as ColegioI[];
    });
  }

  //Crear Docente y una MateriaActiva
  onCrearDocente(form:NgForm):void {

    this.AuthDService.loadAllSubjectActives().subscribe(res => {
      this.AuthDService.MateriasActivas = res as MateriaActivaI[];

      this.AuthDService.loadAllDocentes().subscribe(res => {
        this.AuthDService.Docentes = res as DocenteI[];

        this.ContentREAService.allSubject().subscribe(res => {
          this.materia = res as MateriaI[];
          //console.log('info materia',this.materia.length);

          //Crear Cont Docente
          if (this.AuthDService.Docentes.length == 0) {
            this.newContD = 1;
          }
          else {
            if (this.AuthDService.Docentes.length) {
              this.newContD = 1;
            }
            for (let n = 0; n < this.AuthDService.Docentes.length; n++) {
              for (let i = 0; i < this.AuthDService.Docentes.length; i++) {
                if(this.AuthDService.Docentes[i].id_colegio == form.value.id_colegio){
                  if (this.AuthDService.Docentes.length) {
                    this.newContD = 1;
                  }
                  if (n + 1 == this.AuthDService.Docentes[i].cont) {
                    this.newContD = n + 2;
                    this.temp1 = 0;
                    i = this.AuthDService.Docentes.length;
                  }
                  else {
                    this.newContD = n + 1;
                    this.temp1 = 1;
                  }
                }
              }
              if (this.temp1 == 1) {
                n = this.AuthDService.Docentes.length + 1;
              }
            }
          }

          // ID Docente
          var idGlobal = ""+form.value.id_colegio+this.newContD;
          this.newIDD = parseInt(idGlobal);

          //Crear ID MateriaACtiva
          if (this.AuthDService.MateriasActivas.length == 0) {
            this.newIDMA = 1;
          }
          else {
            for (let n = 0; n < this.AuthDService.MateriasActivas.length; n++) {
              for (let i = 0; i < this.AuthDService.MateriasActivas.length; i++) {
                //console.log('n=', n, 'id_CREA=', this.AuthDService.MateriasActivas[i].id_materiaActiva);
                if (this.AuthDService.MateriasActivas.length) {
                  this.newIDMA = 1;
                }
                if (n + 1 == this.AuthDService.MateriasActivas[i].id_materiaActiva) {
                  this.newIDMA = n + 2;
                  this.temp2 = 0;
                  i = this.AuthDService.MateriasActivas.length;
                }
                else {
                  this.newIDMA = n + 1;
                  this.temp2 = 1;
                }
              }
              if (this.temp2 == 1) {
                n = this.AuthDService.MateriasActivas.length + 1;
              }
            }
          }

          for (let x = 0; x < this.materia.length; x++) {
            if (this.materia[x].id_materia == form.value.id_materia) {
              this.urlTemp = this.materia[x].url_imagen
            }
          }

          //console.log('form', form.value.nombre_materiaActiva);

          const newDocente = {
            id_docente: this.newIDD,
            cont: this.newContD,
            tipo_usuario: 2,
            nombre_docente: form.value.nombre_docente,
            apellido_docente: form.value.apellido_docente,
            id_colegio: form.value.id_colegio,
            nombre_usuario: form.value.nombre_usuario,
            contrasena: form.value.contrasena,
            correo_electronico: form.value.correo_electronico,
          }

          const newMateriaActiva = {
            id_materiaActiva: this.newIDMA,
            nombre_materiaActiva: form.value.nombre_materiaActiva,
            id_materia: form.value.id_materia,
            id_grado: form.value.id_grado,
            id_docente: this.newIDD,
            id_colegio: form.value.id_colegio,
            url_imagen: this.urlTemp
          }

          //console.log('datosDocente', newDocente);
          //console.log('datosMateriaActiva', newMateriaActiva);

          this.AuthDService.createDocente(newDocente).subscribe(res => {
            //console.log(res);
            this.AuthDService.createSubjectActive(newMateriaActiva).subscribe(res => {
              //console.log(res);
              this.resetForm(form);
              this.router.navigateByUrl('/login')
            });
          });
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
    }
  }

}
