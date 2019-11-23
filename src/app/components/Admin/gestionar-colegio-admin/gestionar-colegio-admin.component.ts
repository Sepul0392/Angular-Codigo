import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm } from '@angular/forms'; 
import { ColegioI } from '../../../models/colegio';
import { GradoI } from '../../../models/grado';
import { MateriaI } from '../../../models/materia';
import { AreaMateriaI } from '../../../models/areaMateria';
import { AuthAdminService } from '../../../services/auth-admin.service';
import { MateriaVisualizarI } from '../../../models/materiaVisualizar';


@Component({
  selector: 'app-gestionar-colegio-admin',
  templateUrl: './gestionar-colegio-admin.component.html',
  styleUrls: ['./gestionar-colegio-admin.component.css']
})
export class GestionarColegioAdminComponent implements OnInit {

  colegios:ColegioI[];
  resColegio:any;
  areasMaterias:AreaMateriaI[];
  materias:MateriaI[];
  materiasVisualizar:MateriaVisualizarI[];
  grados:GradoI[];
  materiaToSave:MateriaI;
  gradoToSave:GradoI;
  colegioToSave:ColegioI;
  newID:number;
  temp:number;
  correcto1:boolean;
  correcto2:boolean;
  correcto3:boolean;
  error1:boolean;
  error2:boolean;
  error3:boolean;

  constructor(private router: Router, private AuthAdminService: AuthAdminService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.correcto1 = false;
    this.correcto2 = false;
    this.correcto3 = false;
    this.error1 = false;
    this.error2 = false;
    this.error3 = false;

    this.getOptions();
  }

  getOptions(){
    this.AuthAdminService.allGrade().subscribe(res => {
      this.grados = res as GradoI[];
    });
    this.AuthAdminService.loadAllColegios().subscribe(res => {
      this.colegios = res as ColegioI[];
    });
    this.AuthAdminService.loadAllAreaSubjects().subscribe(res => {
      this.areasMaterias = res as AreaMateriaI[]; 

      this.AuthAdminService.allSubject().subscribe(res => {
        this.materias = res as MateriaI[];
        this.materiasVisualizar = res as MateriaVisualizarI[];

        for (let i = 0; i < this.materias.length; i++) {
          for (let n = 0; n < this.areasMaterias.length; n++) {
            if (this.materias[i].id_areaMateria == this.areasMaterias[n].id_areaMateria) {
              this.materiasVisualizar[i].areaMateria = this.areasMaterias[n].nombre_areaMateria;
            }
          }
        }
        //console.log("actividades visualizar:", this.materiasVisualizar)
      });
    });
  }

  //Imprimir datos del docente en el Form 
  getColegioinForm(colegiohtml){
    this.AuthAdminService.selectedColegio = colegiohtml;
    this.saveDataColegio(colegiohtml);
    //console.log('info colegio', this.AuthAdminService.selectedColegio);
  }

  //Crear Colegio
  crearColegio(form: NgForm): void{
    this.correcto3 = false;
    this.error3 = true;

    const newColegio = {
      id_colegio: form.value.NIT,
      NIT: form.value.NIT,
      nombre_colegio: form.value.nombre_colegio,
      ciudad: form.value.ciudad,
      direccion: form.value.direccion,
      telefono: form.value.telefono,
      tipo_colegio: form.value.tipo_colegio,
      calendario: form.value.calendario,
      rector: form.value.rector,
      colegioActivo: 1
    }
    //console.log(newColegioL);
    this.AuthAdminService.createColegio(newColegio).subscribe(res => {
      //console.log(res);
      this.correcto3 = true;
      this.error3 = false;
      this.getOptions();
      this.resetForm(form);
    });
  }

  //Actualizar datos del Colegio
  actualizarColegio(form: NgForm): void{
    const newInfoColegio = {
      id_colegio: this.colegioToSave.id_colegio,
      NIT: form.value.NIT,
      nombre_colegio: form.value.nombre_colegio,
      ciudad: form.value.ciudad,
      direccion: form.value.direccion,
      telefono: form.value.telefono,
      tipo_colegio: form.value.tipo_colegio,
      calendario: form.value.calendario,
      rector: form.value.rector
    }
    //console.log(newInfoColegioL);
    this.AuthAdminService.uploadSchool(newInfoColegio).subscribe(res => {
      //console.log(res);
      this.getOptions();
      this.resetForm(form);
    });
  }

  //Crear Materia en Mongo
  crearMateria(form: NgForm): void {
    this.correcto1 = false;
    this.error1 = true;

    this.AuthAdminService.allSubject().subscribe(res => {
      this.AuthAdminService.Materias = res as MateriaI[];

      //crear ID
      if (this.AuthAdminService.Materias.length == 0) {
        this.newID = 1;
      }
      else {
        for (let n = 0; n < this.AuthAdminService.Materias.length; n++) {
          for (let i = 0; i < this.AuthAdminService.Materias.length; i++) {
            //console.log('n=', n, 'id_competencia', this.AuthAdminService.Materias[i].id_materia);
            if (n + 1 == this.AuthAdminService.Materias[i].id_materia) {
              this.newID = n + 2;
              this.temp = 0;
              i = this.AuthAdminService.Materias.length;
            }
            else {
              this.newID = n + 1;
              this.temp = 1;
            }
          }
          if (this.temp == 1) {
            n = this.AuthAdminService.Materias.length + 1;
          }
        }
      }

      const newMateria = {
        id_materia: this.newID,
        nombre_materia: form.value.nombre_materia,
        id_colegio: 0,
        id_areaMateria: form.value.id_areaMateria,
        gradoInicial: form.value.gradoInicial,
        url_imagen: "http://localhost:3000/public/repositorio/materiaPorDefecto.jpg"
      }
      //console.log('datos newMateria', newMateria);
    
      this.AuthAdminService.createMateria(newMateria).subscribe(res => {
        //console.log(res);
        this.correcto1 = true;
        this.error1 = false;
        this.resetForm(form);
      });

    });
  }

  //Crear Grado en Mongo
  CrearGrado(form: NgForm): void {
    this.correcto2 = false;
    this.error2 = true;

    const newGrado = {
      id_grado: form.value.id_grado,
      nombre_grado: form.value.nombre_grado
    }
    //console.log('datosGrado', newGrado);

    this.AuthAdminService.createGrade(newGrado).subscribe(res => {
      //console.log(res);
      this.correcto2 = true;
      this.error2 = false;
      this.resetForm(form);
    });
  }

  //Eliminar Materia de Mongo
  deleteMateria(){
    //console.log("id para eliminar:", this.materiaToSave.id_materia);
    this.AuthAdminService.deleteMateria(this.materiaToSave).subscribe(res =>{
      //console.log(res);
      this.getOptions();
      this.materiaToSave = new MateriaI();
    });
    //window.location.reload();
  }
  //Eliminar Grado de Mongo
  deleteGrado(){
    //console.log("id para eliminar:", this.gradoToSave.id_competencia);
    this.AuthAdminService.deleteGrade(this.gradoToSave).subscribe(res =>{
      //console.log(res);
      this.getOptions();
      this.gradoToSave = new GradoI();
    });
    //window.location.reload();
  }

  //Almacenar info temporal de una Competencia
  saveDataMateria(materiahtml){
    this.materiaToSave = materiahtml;
    //console.log('docente guardada:', this.materiaToSave);
  }
  //Almacenar info temporal de una AreaMAteria
  saveDataGrado(gradohtml){
    this.gradoToSave = gradohtml;
    //console.log('estudiante guardada:', this.gradoToSave);
  }
  saveDataColegio(colegiohtml){
    this.colegioToSave = colegiohtml;
    //console.log('estudiante guardada:', this.gradoToSave);
  }

  //Resetear pagina
  resetPage(){
    window.location.reload();
  }

  //resetear Formulario
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.newID = 0;
      this.temp = 0;

      this.getOptions();
    }
  }
}
