import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { contenidoREAI } from '../models/contenidoREA';
import { ActividadI } from '../models/actividad';


@Injectable()
export class ContentREAService {

  selectedContenidoREA: contenidoREAI;  
  contenidosREA: contenidoREAI[];  
  AUTHD_SERVER: string = "http://localhost:3000";
  constructor(private httpClient: HttpClient) {
      this.selectedContenidoREA = new contenidoREAI;
   }

  //Servicio para crear el contenido en MongoDB
  createContentREA(contenidoREA:contenidoREAI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/createContentREA`, contenidoREA);
  }

  //Servicio para subir el contenido al Repositorio ***
  uploadFile(formData){
    return this.httpClient.post(`http://localhost:3000/subir`, formData);
  }

  loadContentREA(id_contenidoREA:ActividadI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/loadContentREA`, id_contenidoREA);
  }

  //Servicio para llamar todos los contenidos en MongoDB
  allContent(){
      return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllcontents`);
  }
  newAllContents(){
    return this.httpClient.get(`${this.AUTHD_SERVER}/newLoadContentREA`);
  }

  /**Modificar Contenido 
  putContenidoREA(contenidoREA: contenidoREAI){
      return this.httpClient.put(`${this.AUTHD_SERVER}/uploadContenido`, contenidoREA);
  }**/

  //Servicio para borrar el contenido de MongoDB
  deleteContentREA(contenidoREA: contenidoREAI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/deleteContentREA/`, contenidoREA)
  }

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
