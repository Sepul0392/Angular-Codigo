import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms'; 
import { AuthAdminService } from '../../../services/auth-admin.service';
import { DocenteI } from '../../../models/docente';
import { EstuadianteI } from '../../../models/estudiante';
import { ColegioI } from '../../../models/colegio';
import { GradoI } from '../../../models/grado';
import { EstuadianteVisualizarI } from '../../../models/estudianteVisualizar';


@Component({
  selector: 'app-gestionar-usuarios-admin',
  templateUrl: './gestionar-usuarios-admin.component.html',
  styleUrls: ['./gestionar-usuarios-admin.component.css']
})
export class GestionarUsuariosAdminComponent implements OnInit {

  colegio:ColegioI;
  docentes:DocenteI[];
  estudantes:EstuadianteI[];
  grados:GradoI[];
  estudianteToSave:EstuadianteI;
  docenteToSave:DocenteI;
  resDocente:any;
  resColegio:any;
  resEstudiante:any;
  cursos:any;
  estudiantesVisualizar:EstuadianteVisualizarI[];

  constructor(private router: Router, private AuthAdminService: AuthAdminService) { }

  ngOnInit() {
    window.scrollTo(0, 0);

    this.AuthAdminService.selectedDocente = new DocenteI();
    this.AuthAdminService.selectedEstudiante = new EstuadianteI();
    this.docenteToSave = new DocenteI();
    this.estudianteToSave = new EstuadianteI();

    this.cursos = [ {id_curso:1,nombre_curso:"A"}, {id_curso:2,nombre_curso:"B"}, 
                    {id_curso:3,nombre_curso:"C"}, {id_curso:4,nombre_curso:"D"} ];

    this.getOptions();
  }

  getOptions(){
    this.AuthAdminService.allGrade().subscribe(res => {
      this.grados = res as GradoI[];
    });
    this.AuthAdminService.loadAllDocentes().subscribe(res => {
      this.docentes = res as DocenteI[];
    });
    this.AuthAdminService.loadAllEstudiantes().subscribe(res => {
      this.estudantes = res as EstuadianteI[];
      this.estudiantesVisualizar = res as EstuadianteVisualizarI[];

      for(let n=0; n < this.estudantes.length; n++){
        for(let i=0; i < this.cursos.length; i++){
          if(this.estudantes[n].curso_estudiante == this.cursos[i].id_curso){
            this.estudiantesVisualizar[n].curso = this.cursos[i].nombre_curso;
          }
        }
      }
      console.log("estudiantes visualizar:", this.estudiantesVisualizar);
    });
  }

  //Imprimir datos del docente en el Form 
  getDocenteinForm(docentehtml){
    this.AuthAdminService.selectedDocente = docentehtml;
    this.saveDataDocente = docentehtml;
    //console.log('info docente', this.AuthAdminService.selectedDocente);
  }

  //Imprimir datos del Estudiante en el Form 
  getEstudianteinForm(estudiantehtml){
    this.AuthAdminService.selectedEstudiante = estudiantehtml;
    this.saveDataEstudiante = estudiantehtml;
    //console.log('info docente', this.AuthAdminService.selectedEstudiante);
  }

  //Actualizar datos del docente
  actualizarDocente(form: NgForm): void{
    const infoDocente = {
      id_docente: this.AuthAdminService.selectedDocente.id_docente,
      nombre_docente: form.value.nombre_docente,
      apellido_docente: form.value.apellido_docente,
      nombre_usuario: form.value.nombre_usuario,
      correo_electronico: form.value.correo_electronico,
      contrasena: form.value.contrasena
    }

    this.AuthAdminService.uploadDocente(infoDocente).subscribe(res => {
      console.log(res);
      this.getOptions();
      this.resetForm(form);
    });
  }

  //Actualizar datos del Estudiante
  actualizarEstudiante(form: NgForm): void{
    const infoEstudiante = {
      id_estudiante: this.AuthAdminService.selectedEstudiante.id_estudiante,
      nombre_estudiante: form.value.nombre_estudiante,
      apellido_estudiante: form.value.apellido_estudiante,
      grado_estudiante: form.value.grado_estudiante,
      curso_estudiante: form.value.curso_estudiante,
      nombre_usuario: form.value.nombre_usuario,
      contrasena: form.value.contrasena,
      correo_electronico: form.value.correo_electronico
    }
    console.log();

    this.AuthAdminService.uploadEstudiante(infoEstudiante).subscribe(res => {
      console.log(res);
      this.getOptions();
      this.resetForm(form);
    });
  }

  //Eliminar Docente de Mongo
  deleteDocente(){
    //console.log("id para eliminar:", this.docenteToSave.id_docente);
    this.AuthAdminService.deleteDocente(this.docenteToSave).subscribe(res =>{
      //console.log(res);
      this.getOptions();
      this.docenteToSave = new DocenteI();
    });
    //window.location.reload();
  }
  //Eliminar Estudiante de Mongo
  deleteEstudiante(){
    //console.log("id para eliminar:", this.competenciaToSave.id_competencia);
    this.AuthAdminService.deleteEstudiante(this.estudianteToSave).subscribe(res =>{
      //console.log(res);
      this.getOptions();
      this.estudianteToSave = new EstuadianteI();
    });
    //window.location.reload();
  }

  //Almacenar info temporal de una Competencia
  saveDataDocente(docentehtml){
    this.docenteToSave = docentehtml as DocenteI;
    //console.log('docente guardada:', this.docenteToSave);
  }
  //Almacenar info temporal de una AreaMAteria
  saveDataEstudiante(estudiantehtml){
    this.estudianteToSave = estudiantehtml;
    //console.log('estudiante guardada:', this.estudianteToSave);
  }

  //Resetear pagina
  resetPage(){
    window.location.reload();
  }

  //resetear Formulario
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.AuthAdminService.selectedDocente = new DocenteI();
      this.AuthAdminService.selectedEstudiante = new EstuadianteI();
      this.docenteToSave = new DocenteI();
      this.estudianteToSave = new EstuadianteI();
      this.getOptions();
    }
  }
}
