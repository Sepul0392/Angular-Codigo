import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocenteI } from '../models/docente';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { MateriaActivaI } from '../models/materiaActiva';
import { ColegioI } from '../models/colegio';
import { Router } from '@angular/router';


@Injectable()
export class AuthDService {
  AUTHD_SERVER: string = "http://localhost:3000";
  authDocente = new BehaviorSubject(false);
  private token: string;
  private nombreApellido_docenteAuth: string;
  private id_docenteAuth: number;
  private nombre_usuarioAuth: string;

  private localStorageService;
  //private currentSession : DocenteI = null;

  selectedDocente: DocenteI;
  Docentes: DocenteI[]; 

  selectedColegio: ColegioI;
  Colegios: ColegioI[];

  selectedMateriaActiva: MateriaActivaI;
  MateriasActivas: MateriaActivaI[];

  constructor(private httpClient: HttpClient, private router: Router) {
    //this.localStorageService = sessionStorage;
    this.localStorageService = localStorage;
    //this.currentSession = this.loadSessionData();
    this.selectedDocente = new DocenteI;
    this.selectedMateriaActiva = new MateriaActivaI;
    this.selectedColegio = new ColegioI;
  }

  //------------------------------------------------------------------------------------ DOCENTE

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

  //Modificar datos del Docente en MongoDB 
  uploadDocente(docente:DocenteI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/uploadDocente`, docente);
}

  //------------------------------------------------------------------------------------ LOGIN
  register(docente:DocenteI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTHD_SERVER}/register`,
    docente).pipe(tap(
      (res:JwtResponseI) => {
        if(res){
          // guardar token
          //this.saveToken(res.dataDocente.accessToken, res.dataDocente.expiresIn);
        }
      })
    );
  }

  //Sericio Verificacion de Login
  loginDocente(docente:DocenteI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTHD_SERVER}/loginDocente`,
    docente).pipe(tap(
      (res:JwtResponseI) => {
        if(res){
          //this.saveData(res.dataDocente.id_docente, res.dataDocente)
          console.log('login res:', res);
          this.saveSession(res.dataDocente.id_docente, res.dataDocente.nombre_docente, res.dataDocente.apellido_docente,  
                           res.dataDocente.accessToken, res.dataDocente.expiresIn, res.dataDocente.nombre_usuario);
        }
      })
    );
  }

  //Servicio de Logout
  logout(): void{
    this.token = '';
    this.nombreApellido_docenteAuth = '';
    this.id_docenteAuth = 0;
    this.nombre_usuarioAuth = "";
    localStorage.removeItem("ID_DOCENTE");
    localStorage.removeItem("NOMBRE_DOCENTE");
    localStorage.removeItem("APELLIDO_DOCENTE");
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
    localStorage.removeItem("NOMBRE_USUARIO");
  }

  //Guardar Informacion de inicio de Sesion
  saveSession(id_docent: number, nombre_docente: string, apellido_docente: string, 
                    token: string, expiresIn: string, nombre_usuario: string): void{
    this.localStorageService.setItem("ID_DOCENTE", id_docent);
    this.localStorageService.setItem("NOMBRE_DOCENTE", nombre_docente);
    this.localStorageService.setItem("APELLIDO_DOCENTE", apellido_docente);
    this.localStorageService.setItem("ACCESS_TOKEN", token);
    this.localStorageService.setItem("EXPIRES_IN", expiresIn);
    this.localStorageService.setItem("NOMBRE_USUARIO", nombre_usuario);
    this.token = token;
    this.nombreApellido_docenteAuth = nombre_docente+" "+apellido_docente;
    console.log('prueba', this.nombreApellido_docenteAuth);
    this.id_docenteAuth = id_docent;
    this.nombre_usuarioAuth = nombre_usuario;
  }

  getToken():string{
    if(!this.token)
    {
      this.token=localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  getnombreApellidoDocente(): string {
    if(!this.nombreApellido_docenteAuth)
    {
      this.nombreApellido_docenteAuth = this.localStorageService.getItem("NOMBRE_DOCENTE")+" "+this.localStorageService.getItem("APELLIDO_DOCENTE");
    }
    return this.nombreApellido_docenteAuth;
  }

  getIdDocente(): number {
    var id_docenteAuthString = this.localStorageService.getItem("ID_DOCENTE");
    return parseInt(id_docenteAuthString, 20);
  }

  getNombreUsuario(): string {
    if(!this.nombre_usuarioAuth)
    {
      this.nombre_usuarioAuth = this.localStorageService.getItem("NOMBRE_USUARIO");
    }
    return this.nombre_usuarioAuth;
  }

  isAuthenticated(): boolean {
    return (this.getToken() != null) ? true : false;
  };

  //------------------------------------------------------------------------------------ MATERIAACTIVA

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

  //------------------------------------------------------------------------------------ COLEGIO

  loadColegio(infoColegio:any){
    return this.httpClient.post(`${this.AUTHD_SERVER}/loadSchool`, infoColegio);
  }






  /* Storage Services

  setCurrentSession(docente: DocenteI): void {
    this.currentSession = docente;
    this.localStorageService.setItem('currentUser', docente)
  }

  loadSessionData(): DocenteI{
    var sessionStr = this.localStorageService.getItem('currentUser');
    return sessionStr;
  }

  getCurrentSession(): DocenteI {
    return this.currentSession;
  }

  removeCurrentSession(): void{
    this.localStorageService.removeItem('currentUser');
    this.currentSession = null;
  }

  /*getCurrentUser(): JwtResponseI {
    var user: JwtResponseI = this.getCurrentSession();
    return user;
  };

  isAuthenticated(): boolean {
    return (this.getCurrentToken() != null) ? true : false;
  };

  getCurrentToken(): string {
    var session = this.getCurrentSession();
    return (session && session.accessToken) ? session.accessToken : null;
  };

  logoutDocente(): void{
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }*/
}
