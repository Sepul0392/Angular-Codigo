import { AuthDService } from '../../services/auth-d.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrar-docente',
  templateUrl: './administrar-docente.component.html',
  styleUrls: ['./administrar-docente.component.css']
})
export class AdministrarDocenteComponent implements OnInit {

  constructor(private AuthDService: AuthDService) { }

  ngOnInit() {
  }

}
