import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtResponseI } from '../models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { ActividadI } from '../models/actividad';


@Injectable()
export class ActividadService {

  selectedActividad: ActividadI;  
  actividades: ActividadI[];  
  AUTHD_SERVER: string = "http://localhost:3000";
  constructor(private httpClient: HttpClient) {
      this.selectedActividad = new ActividadI;
  }

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
      return this.httpClient.put(`${this.AUTHD_SERVER}/uploadActivity`, actividad);
  }

  //Servicio para borrar la Actividad de MongoDB
  deleteActivity(actividad: ActividadI){
    return this.httpClient.post(`${this.AUTHD_SERVER}/deleteActivity/`, actividad)
  }

  //Servicio para llamar todas las Competencias en Mongo
  allCompetencias() {
    return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllCompetencias`);
  }

  //Servicio para llamar todos los Docentes en Mongo
  allDocente() {
    return this.httpClient.get(`${this.AUTHD_SERVER}/loadAllDocentes`);
  }

}
