import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocenteI } from '../models/docente';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()
export class AuthDService {
  AUTHD_SERVER: string = "http://localhost:3000";
  authDocente = new BehaviorSubject(false);
  private token: string;
  private nombreApellido_docenteAuth: string;
  private id_docenteAuth: number;

  private localStorageService;
  private currentSession : DocenteI = null;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.localStorageService = localStorage;
    this.currentSession = this.loadSessionData();
   }

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

  loginDocente(docente:DocenteI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTHD_SERVER}/loginDocente`,
    docente).pipe(tap(
      (res:JwtResponseI) => {
        if(res){
          //this.saveData(res.dataDocente.id_docente, res.dataDocente)
          console.log('login res:', res);
          this.saveSession(res.dataDocente.id_colegio, res.dataDocente.nombre_docente, res.dataDocente.apellido_docente, res.dataDocente.accessToken, res.dataDocente.expiresIn);
        }
      })
    );
  }

  logout(): void{
    this.token = '';
    this.nombreApellido_docenteAuth = '';
    this.id_docenteAuth = 0;
    localStorage.removeItem("ID_DOCENTE");
    localStorage.removeItem("NOMBRE_DOCENTE");
    localStorage.removeItem("APELLIDO_DOCENTE");
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }


  saveSession(id_docent: number, nombre_docente: string, apellido_docente: string, 
                    token: string, expiresIn: string): void{
    this.localStorageService.setItem("ID_DOCENTE", id_docent);
    this.localStorageService.setItem("NOMBRE_DOCENTE", nombre_docente);
    this.localStorageService.setItem("APELLIDO_DOCENTE", apellido_docente);
    this.localStorageService.setItem("ACCESS_TOKEN", token);
    this.localStorageService.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
    this.nombreApellido_docenteAuth = nombre_docente+" "+apellido_docente;
    console.log('prueba', this.nombreApellido_docenteAuth);
    this.id_docenteAuth = id_docent;
  }

  private getToken():string{
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

  // Storage Services

  setCurrentSession(docente: DocenteI): void {
    this.currentSession = docente;
    this.localStorageService.setItem('currentUser', docente)
  }

  loadSessionData(): DocenteI{
    var sessionStr = this.localStorageService.getItem('currentUser');
    console.log('prueba', sessionStr);
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
  };*/

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
  }

}
