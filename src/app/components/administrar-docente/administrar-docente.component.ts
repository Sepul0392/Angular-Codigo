import { AuthDService } from '../../services/auth-d.service';
import { Component, OnInit } from '@angular/core';
import { MateriaI } from '../../models/materia';
import { GradoI } from '../../models/grado';
import { DocenteI } from '../../models/docente';
import { ColegioI } from '../../models/colegio';
import { MateriaActivaI } from '../../models/materiaActiva';
import { MateriaActivaVisualizarI } from '../../models/materiaActivaVisualizar';
import { ContentREAService } from '../../services/content-rea.service';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-administrar-docente',
  templateUrl: './administrar-docente.component.html',
  styleUrls: ['./administrar-docente.component.css']
})
export class AdministrarDocenteComponent implements OnInit {

  public nombreApellidoDocente:string;
  public idDocente:number;
  idColegio: number;
  resDocente:any;
  resColegio:any;
  DocenteInfo: DocenteI;
  ColegioInfo: ColegioI;
  MateriaActivaInfo: MateriaActivaVisualizarI[];
  materia:MateriaI[];
  grado:GradoI[];
  newIDMA:number;
  temp:number;

  materiaActivaToSave:MateriaActivaI;
  urlTemp:string;
  correcto:boolean;
  error:boolean;

  constructor(private ContentREAService: ContentREAService, private AuthDService: AuthDService, private router: Router) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.comprobacionLogin();
    this.correcto = false;
    this.error = false;

    this.DocenteInfo = new DocenteI;
    this.ColegioInfo = new ColegioI;

    this.getOptions();
    this.idDocente = this.AuthDService.getIdDocente();
    this.nombreApellidoDocente = this.AuthDService.getnombreApellidoDocente();
    this.idColegio = this.AuthDService.getIdColegioDocente();
    this.getDocenteinForm();
    this.getInformacionCompleta();
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

  //Obtener informacion y listado de todas las MateriasActivas
  getInformacionCompleta(){
    this.idDocente = this.AuthDService.getIdDocente();

    const infoDocente = {
      id_docente: this.idDocente
    }

    this.ContentREAService.allSubject().subscribe(res => {
      this.materia = res as MateriaI[];
      //console.log('info materia',this.materia.length);

      this.AuthDService.loadDocente(infoDocente).subscribe(res =>{
        this.resDocente = res as DocenteI;
        this.DocenteInfo = this.resDocente.teacher; 
        //console.log('info docente', this.resDocente);
  
        this.AuthDService.loadColegio(this.resDocente.teacher).subscribe(res =>{
          this.resColegio = res as ColegioI;
          this.ColegioInfo = this.resColegio.school;
          //console.log('info colegio', this.resColegio);
  
          this.AuthDService.loadAllSubjectActives().subscribe(res =>{
            this.AuthDService.MateriasActivas = res as MateriaActivaI[];
            this.MateriaActivaInfo = res as MateriaActivaVisualizarI[];
  
            for (let i = 0; i < this.AuthDService.MateriasActivas.length; i++) {
              for (let m = 0; m < this.materia.length; m++) {
                if (this.AuthDService.MateriasActivas[i].id_materia == this.materia[m].id_materia) {
                  this.MateriaActivaInfo[i].nombre_materia = this.materia[m].nombre_materia;
                }
              }
            }
          });
        });
      });
    });
  }

  //Crear una MateriaActiva
  CrearMateriaActiva(form: NgForm): void {
    this.correcto = false;
    this.error = true;
    
    this.AuthDService.loadAllSubjectActives().subscribe(res => {
      this.AuthDService.MateriasActivas = res as MateriaActivaI[];

      this.ContentREAService.allSubject().subscribe(res => {
        this.materia = res as MateriaI[];
        //console.log('info materia',this.materia.length);

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
                this.temp = 0;
                i = this.AuthDService.MateriasActivas.length;
              }
              else {
                this.newIDMA = n + 1;
                this.temp = 1;
              }
            }
            if (this.temp == 1) {
              n = this.AuthDService.MateriasActivas.length + 1;
            }
          }
        }

        for(let x=0; x < this.materia.length; x++)
        {
          if(this.materia[x].id_materia == form.value.id_materia){
            this.urlTemp = this.materia[x].url_imagen
          }
        }

        //console.log('form', form.value.nombre_materiaActiva);
        
        const newMateriaActiva = {
          id_materiaActiva: this.newIDMA,
          nombre_materiaActiva: form.value.nombre_materiaActiva,
          id_materia: form.value.id_materia,
          id_grado: form.value.id_grado,
          id_docente: this.idDocente,
          id_colegio: this.idColegio,
          url_imagen: this.urlTemp
        }

        //console.log('datosContenido', newMateriaActiva);

        this.AuthDService.createSubjectActive(newMateriaActiva).subscribe(res => {
          //console.log(res);
          this.resetForm(form);
          this.getInformacionCompleta();
          this.correcto = true;
          this.error = false;
        });

      });
    });
  }

  //Almacenar info temporal de una materiaActiva
  saveMateriaActivaData(materiaActivahtml){
    this.materiaActivaToSave = materiaActivahtml;
    //console.log("contenido guardado:", this.materiaActivaToSave);
  }

  //Eliminar materiaActiva de Mongo
  deleteMateriaActiva(){
    //console.log("id para eliminar:", this.materiaActivaToSave.id_materiaActiva);
    this.AuthDService.deleteSubjectActive(this.materiaActivaToSave).subscribe(res =>{
      //console.log(res);
    });
    this.getInformacionCompleta();
    //window.location.reload();
  }

  //Imprimir datos del docente en el Form 
  getDocenteinForm(){
    this.idDocente = this.AuthDService.getIdDocente();

    const infoDocente = {
      id_docente: this.idDocente
    }

    this.AuthDService.loadDocente(infoDocente).subscribe(res =>{
      this.resDocente = res as DocenteI;
      this.AuthDService.selectedDocente = this.resDocente.teacher; 
      //console.log('info docente', this.AuthDService.selectedDocente);
    });
  }

  //Actualizar datos Personales del docente
  actualizarInfoPersonalDocente(form: NgForm): void{
    const infoPersonalDocente = {
      id_docente: this.idDocente,
      nombre_docente: form.value.nombre_docente,
      apellido_docente: form.value.apellido_docente
    }

    this.AuthDService.uploadInfoPersonalDocente(infoPersonalDocente).subscribe(res => {
      //console.log(res);
      this.getDocenteinForm();
    });
  }

  //Actualizar datos de Login del docente
  actualizarInfoLoginDocente(form: NgForm): void{
    const infoLoginDocente = {
      id_docente: this.idDocente,
      nombre_usuario: form.value.nombre_usuario,
      correo_electronico: form.value.correo_electronico,
      contrasena: form.value.contrasena
    }

    this.AuthDService.uploadInfoLoginDocente(infoLoginDocente).subscribe(res => {
      //console.log(res);
      this.getDocenteinForm();
    });
  }

  resetPage(){
    window.location.reload();
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
  }

  comprobacionLogin(){
    if (this.AuthDService.getIdDocente()){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
