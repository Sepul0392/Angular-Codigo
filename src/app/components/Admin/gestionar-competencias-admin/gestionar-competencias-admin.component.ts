import { AuthAdminService } from '../../../services/auth-admin.service';
import { CompetenciaI } from '../../../models/competencia';
import { AreaMateriaI } from '../../../models/areaMateria';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-gestionar-competencias-admin',
  templateUrl: './gestionar-competencias-admin.component.html',
  styleUrls: ['./gestionar-competencias-admin.component.css']
})
export class GestionarCompetenciasAdminComponent implements OnInit {

  constructor(private router: Router, private AuthAdminService: AuthAdminService) { }

  ngOnInit() {
    
  }



}
