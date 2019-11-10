import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MateriaI } from '../../models/materia';
import { AuthDService } from '../../services/auth-d.service';


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  constructor(private AuthDService: AuthDService, private router: Router) { }

  ngOnInit() {
  }

}
