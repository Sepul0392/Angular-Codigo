import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { AuthDService } from '../../services/auth-d.service';
import { ContentREAService } from '../../services/content-rea.service';
import { DocenteI } from '../../models/docente';
import { MateriaActivaI } from '../../models/materiaActiva';
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
  newIDD: number;
  newIDMA: number;
  temp1: number;
  temp2: number;

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
  }

  onCrearDocente(form:NgForm):void {

    this.AuthDService.loadAllSubjectActives().subscribe(res => {
      this.AuthDService.MateriasActivas = res as MateriaActivaI[];

      this.AuthDService.loadAllDocentes().subscribe(res => {
        this.AuthDService.Docentes = res as DocenteI[];

        //Crear ID Docente
        if (this.AuthDService.Docentes.length == 0) {
          this.newIDD = 0;
        }
        else {
          for (let n = 0; n < this.AuthDService.Docentes.length; n++) {
            for (let i = 0; i < this.AuthDService.Docentes.length; i++) {
              //console.log('n=', n, 'id_CREA=', this.AuthDService.Docentes[i].id_docente);
              if (this.AuthDService.Docentes.length) {
                this.newIDD = 0;
              }
              if (n == this.AuthDService.Docentes[i].id_docente) {
                this.newIDD = n + 1;
                this.temp1 = 0;
                i = this.AuthDService.Docentes.length;
              }
              else {
                this.newIDD = n;
                this.temp1 = 1;
              }
            }
            if (this.temp1 == 1) {
              n = this.AuthDService.Docentes.length;
            }
          }
        }

        //Crear ID MateriaACtiva
        if (this.AuthDService.MateriasActivas.length == 0) {
          this.newIDMA = 0;
        }
        else {
          for (let n = 0; n < this.AuthDService.MateriasActivas.length; n++) {
            for (let i = 0; i < this.AuthDService.MateriasActivas.length; i++) {
              //console.log('n=', n, 'id_CREA=', this.AuthDService.MateriasActivas[i].id_materiaActiva);
              if (this.AuthDService.MateriasActivas.length) {
                this.newIDMA = 0;
              }
              if (n == this.AuthDService.MateriasActivas[i].id_materiaActiva) {
                this.newIDMA = n + 1;
                this.temp2 = 0;
                i = this.AuthDService.MateriasActivas.length;
              }
              else {
                this.newIDMA = n;
                this.temp2 = 1;
              }
            }
            if (this.temp2 == 1) {
              n = this.AuthDService.MateriasActivas.length;
            }
          }
        }

        const newDocente = {
          id_docente: this.newIDD,
          tipo_usuario: 2,
          nombre_docente: form.value.nombre_docente,
          apellido_docente: form.value.apellido_docente,
          id_colegio: 0,
          nombre_usuario: form.value.nombre_usuario,
          contrasena: form.value.contrasena,
          correo_electronico: form.value.correo_electronico,
          accessToken: '',
          expiresIn: ''
        }

        const newMateriaActiva = {
          id_materiaActiva: this.newIDMA,
          nombre_materiaActiva: form.value.nombre_materiaActiva,
          id_materia: form.value.id_materia,
          id_grado: form.value.id_grado,
          id_docente: this.newIDD,
          id_colegio: 0
        }

        console.log('datosContenido', newDocente);
        console.log('datosContenido', newMateriaActiva);

        this.AuthDService.createDocente(newDocente).subscribe(res => {
          console.log(res);
          this.AuthDService.createSubjectActive(newMateriaActiva).subscribe(res => {
            console.log(res);
          });
        });  
      });
    });
    this.resetForm(form);
    this.router.navigateByUrl('/login')
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
