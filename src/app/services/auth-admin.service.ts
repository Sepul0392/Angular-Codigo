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


}
