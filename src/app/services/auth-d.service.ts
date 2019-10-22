import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DocenteI } from '../models/docente';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { contenidoREAI } from '../models/contenidoREA';


@Injectable()
export class AuthDService {
  AUTHD_SERVER: string = "http://localhost:3000";
  authDocente = new BehaviorSubject(false);
  private token: string;
  constructor(private httpClient: HttpClient) { }

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
          // guardar token
          //this.saveToken(res.dataDocente.accessToken, res.dataDocente.expiresIn);
        }
      })
    );
  }

  logout(): void{
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void{
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken():string{
    if(!this.token)
    {
      this.token=localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }

  createContentREA(contenidoREA:contenidoREAI): Observable<JwtResponseI> {
    return this.httpClient.post<JwtResponseI>(`${this.AUTHD_SERVER}/createContentREA`,
    contenidoREA).pipe(tap(
      (res:JwtResponseI) => {
        if(res){
          // guardar token
          //this.saveToken(res.dataDocente.accessToken, res.dataDocente.expiresIn);
        }
      })
    );
  }

}
