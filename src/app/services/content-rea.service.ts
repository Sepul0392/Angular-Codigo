import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { contenidoREAI } from '../models/contenidoREA';
import { ActividadI } from '../models/actividad';


@Injectable()
export class ContentREAService {
  private localStorageService;

  selectedContenidoREA: contenidoREAI;  
  contenidosREA: contenidoREAI[];  
  AUTHD_SERVER: string = "http://localhost:3000";
  constructor(private httpClient: HttpClient) {
    //this.localStorageService = sessionStorage;
    this.localStorageService = localStorage;

    this.selectedContenidoREA = new contenidoREAI;
   }


  //====================================================================================  IPSERVER

  loadIPServer(): string {
    var IPServer = this.localStorageService.getItem("IPSERVER");
    return IPServer; 
  }


  //------------------------------------------------------------------------------------ ContenidoREA
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
