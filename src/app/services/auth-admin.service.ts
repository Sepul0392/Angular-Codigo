import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtResponseI } from '../models/jwt-response';
import { Observable, BehaviorSubject } from 'rxjs';
import { ColegioI } from '../models/colegio';
import { DocenteI } from '../models/docente';
import { MateriaActivaI } from '../models/materiaActiva';
import { MateriaI } from '../models/materia';
import { CompetenciaI } from '../models/competencia';
import { AreaMateriaI } from '../models/areaMateria';
import { GradoI } from '../models/grado';
import { ActividadI } from '../models/actividad';
import { contenidoREAI } from '../models/contenidoREA';
import { AdminI } from '../models/admin';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminService {
  AUTHD_SERVER: string = "http://localhost:3000";
  authAdmin = new BehaviorSubject(false);
  private token: string;
  private id_adminAuth: number;
  private nombre_usuarioAuth: string;
  private localStorageService;

  selectedMateriaActiva: MateriaActivaI;
  MateriasActivas: MateriaActivaI[];
  selectedContenidoREA: contenidoREAI;
  ContenidosREA: contenidoREAI[];
  selectedCompetencia: CompetenciaI;
  Competencias: CompetenciaI[];
  selectedAreaMateria: AreaMateriaI;
  AreasMaterias: AreaMateriaI[];
  selectedActividad: ActividadI;
  Actividads: ActividadI[];
  selectedDocente: DocenteI;
  Docentes: DocenteI[]; 
  selectedColegio: ColegioI;
  Colegios: ColegioI[];
  selectedMateria: MateriaI;
  Materias: MateriaI[];
  selectedGrado: GradoI;
  Grados: GradoI[];
  selectedAdmin: AdminI;
  Admin: AdminI[];

  constructor(private httpClient: HttpClient, private router: Router) {
    //this.localStorageService = sessionStorage;
    this.localStorageService = localStorage;
    //this.currentSession = this.loadSessionData();
    
    this.selectedMateriaActiva = new MateriaActivaI;
    this.selectedContenidoREA = new contenidoREAI;
    this.selectedCompetencia = new CompetenciaI;
    this.selectedAreaMateria = new AreaMateriaI;
    this.selectedActividad = new ActividadI;
    this.selectedDocente = new DocenteI;
    this.selectedColegio = new ColegioI;
    this.selectedMateria = new MateriaI;
    this.selectedGrado = new GradoI;
  }


  //====================================================================================  LOGIN

  //Sericio Verificacion de Login
  loginAdmin(login:any): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTHD_SERVER}/loginAdmin`, 
    login).pipe(tap(
      (res:JwtResponseI) => {
        if(res){
          //this.saveData(res.dataDocente.id_docente, res.dataDocente)
          console.log('login res:', res);
          this.saveSession(res.dataAdmin.id_admin, res.dataAdmin.accessToken, res.dataAdmin.expiresIn, res.dataAdmin.nombre_usuario);
        }
      })
    );
  }

  //Servicio de Logout
  logout(): void{
    this.token = '';
    this.id_adminAuth = 0;
    this.nombre_usuarioAuth = '';
    localStorage.removeItem("ID_ADMIN");
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    localStorage.removeItem("NOMBRE_USUARIO");
  }

  //Guardar Informacion de inicio de Sesion
  saveSession(id_admin: number, token: string, expiresIn: string, nombre_usuario: string): void{
    this.localStorageService.setItem("ID_ADMIN", id_admin);
    this.localStorageService.setItem("ACCESS_TOKEN", token);
    this.localStorageService.setItem("EXPIRES_IN", expiresIn);
    this.localStorageService.setItem("NOMBRE_USUARIO", nombre_usuario);
    this.token = token;
    this.id_adminAuth = id_admin;
    this.nombre_usuarioAuth = nombre_usuario;
  }

  getToken(): string {
    this.token = localStorage.getItem("ACCESS_TOKEN");
    return this.token;
  }

  getIdAdmin(): number {
    var id_adminAuthString = this.localStorageService.getItem("ID_ADMIN");
    return parseInt(id_adminAuthString, 20);
  }

  getNombreUsuario(): string {
    this.nombre_usuarioAuth = this.localStorageService.getItem("NOMBRE_USUARIO");
    return this.nombre_usuarioAuth;
  }

  isAuthenticated(): boolean {
    return (this.getToken() != null) ? true : false;
  };


  //====================================================================================  MATERIAACTIVA

  //Crear Materia Activa del profesor
  createSubjectActive(materiaActiva:MateriaActivaI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/createSubjectActive`, materiaActiva);
  }

  //Cragar Todas las Materias Activas
  loadAllSubjectActives(){
    return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllSubjectActives`);
  }

  //Eliminar una Actividad Activa
  deleteSubjectActive(materiaActiva:MateriaActivaI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/deleteSubjectActive`, materiaActiva);
  }


  //====================================================================================  DOCENTE

  //Servicio Crear Docente
  createDocente(docente:DocenteI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/createDocente`, docente);
  }

  //Buscar un Docente
  loadDocente(info:any){
    return this.httpClient.post(`${this.AUTHD_SERVER}/loadDocente`, info);
  }

  //Cragar Todos los docentes
  loadAllDocentes(){
    return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllDocentes`);
  }

  //Eliminar una Actividad Activa
  deleteDocente(docente:DocenteI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/deleteDocente`, docente);
  }

  //Modificar datos Login del Docente en MongoDB 
  uploadInfoLoginDocente(info:any){
    return this.httpClient.post(`${this.AUTHD_SERVER}/uploadInfoLoginDocente`, info);
  }

  //Modificar datos Presonales del Docente en MongoDB 
  uploadInfoPersonalDocente(info:any){
    return this.httpClient.post(`${this.AUTHD_SERVER}/uploadInfoPersonalDocente`, info);
  }


  //====================================================================================  ContenidoREA

  //Servicio para crear el contenido en MongoDB
  createContentREA(contenidoREA:contenidoREAI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/createContentREA`, contenidoREA);
  }

  //Servicio para cambiar el estado de USO del contenido en Mongo
  uploadEstadoContentREA(data:any){
    return this.httpClient.post(`http://localhost:3000/uploadEstadoContentREA`, data);
  }

  //Servicio para subir el contenido al Repositorio ***
  uploadFile(formData){
    return this.httpClient.post(`http://localhost:3000/subir`, formData);
  }

  //Buscar un Contenido
  loadContentREA(data:any){
    return this.httpClient.post(`${this.AUTHD_SERVER}/loadContentREA`, data);
  }

  //Servicio para llamar todos los contenidos en MongoDB
  allContent(){
      return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllcontents`);
  }
  newAllContents(){
    return this.httpClient.get(`${this.AUTHD_SERVER}/newLoadContentREA`);
  }

  //Servicio para borrar el contenido de MongoDB
  deleteContentREA(contenidoREA: contenidoREAI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/deleteContentREA/`, contenidoREA)
  }


  //====================================================================================  Actividades

  //Servicio para crear la Actividad en MongoDB
  createActivity(actividad:ActividadI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/createActivity`, actividad);
  }

  //Servicio para llamar todas las ACtividades en MongoDB
  allActivities(){
      return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllActivities`);
  }

  //Servicio para modificar datos de la Actividad en MongoDB 
  uploadActivity(actividad: ActividadI){
      return this.httpClient.post(`${this.AUTHD_SERVER}/uploadActivity`, actividad);
  }

  //Servicio para borrar la Actividad de MongoDB
  deleteActivity(actividad: ActividadI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/deleteActivity`, actividad)
  }


  //====================================================================================  COMPETENCIAS

  //Servicio para crear la Competencia en MongoDB
  createCompetencia(competencia:CompetenciaI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/createCompetencia`, competencia);
  }

  //Servicio para llamar todas las Competencias en Mongo
  allCompetencias() {
    return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllCompetencias`);
  }

  //Servicio para borrar la Competencia de MongoDB
  deleteCompetencia(info: any){
    return this.httpClient.post(`${this.AUTHD_SERVER}/deleteCompetencia`, info)
  }


  //====================================================================================  AreaMateria

  //Servicio para crear la AreaMateria en MongoDB
  createAreaSubject(areaMateria:AreaMateriaI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/createAreaSubject`, areaMateria);
  }

  //Servicio para llamar todas las AreaMaterias en Mongo
  loadAllAreaSubjects() {
    return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllAreaSubjects`);
  }

  //Servicio para borrar la AreaMateria de MongoDB
  deleteAreaSubject(info: any){
    return this.httpClient.post(`${this.AUTHD_SERVER}/deleteAreaSubject`, info)
  }


  //====================================================================================  COLEGIO

  //Servicio para obtener la informacion del colegio
  loadColegio(infoColegio:any){
    return this.httpClient.post(`${this.AUTHD_SERVER}/loadSchool`, infoColegio);
  }

  //Servicio para modificar datos del colegio en MongoDB 
  uploadSchool(infoColegio: any){
    return this.httpClient.post(`${this.AUTHD_SERVER}/uploadSchool`, infoColegio);
  }


  //------------------------------------------------------------------------------------ Servicions de Ayuda

  //Servicio para llamar todas las materias
  allSubject() {
    return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllSubjects`);
  }
  newAllSubjects(){
    return this.httpClient.get(`${this.AUTHD_SERVER}/newLoadSubjects`);
  }

  //Servicio para llamar todos los grados
  allGrade() {
    return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllGrades`);
  }
  newAllGrades(){
    return this.httpClient.get(`${this.AUTHD_SERVER}/newLoadGrades`);
  }

  //Servicio para llamar todos los tipos de Contenidos
  allType() {
    return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllTypes`);
  }
  newAllTypes(){
    return this.httpClient.get(`${this.AUTHD_SERVER}/newLoadTypes`);
  }
}
