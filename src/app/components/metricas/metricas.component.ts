import { AuthDService } from '../../services/auth-d.service';
import { ActividadService } from '../../services/actividad.service';
import { ActividadI } from '../../models/actividad';
import { ActividadVisualizaI } from '../../models/actividadVisualizar';
import { EstuadianteI } from '../../models/estudiante';
import { EstuadianteVisualizarI } from '../../models/estudianteVisualizar';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-metricas',
  templateUrl: './metricas.component.html',
  styleUrls: ['./metricas.component.css']
})
export class MetricasComponent implements OnInit {

  actividades:ActividadI[];
  estudiantes:EstuadianteI[];
  ActividadVisualizar:ActividadVisualizaI[];
  estuadianteVisualizar:EstuadianteVisualizarI[];

  id_docenteAuth:number;

  constructor(private AuthDService: AuthDService, private ActividadService: ActividadService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.id_docenteAuth = this.AuthDService.getIdDocente();

  }

}
