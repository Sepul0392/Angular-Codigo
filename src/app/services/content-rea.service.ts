import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { contenidoREAI } from '../models/contenidoREA';


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

  //Servicio para subir el contenido al Repositorio
  uploadFile(formData){
    return this.httpClient.post(`http://localhost:3000/subir`, formData);
  }

  //Servicio para llamar el contenido en MongoDB
  allContent(){
      return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllcontents`);
  }

  /**Modificar Contenido 
  putContenidoREA(contenidoREA: contenidoREAI){
      return this.httpClient.put(`${this.AUTHD_SERVER}/uploadContenido`, contenidoREA);
  }**/

  //Servicio para borrar el contenido de MongoDB
  deleteContentREA(id_CREA: string){
    return this.httpClient.delete(`${this.AUTHD_SERVER}/deleteContentREA`)
  }

}
