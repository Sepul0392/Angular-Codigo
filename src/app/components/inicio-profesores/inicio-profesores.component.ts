import { AuthDService } from '../../services/auth-d.service';
import { JwtResponseI } from '../../models/jwt-response';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-inicio-profesores',
  templateUrl: './inicio-profesores.component.html',
})
export class InicioProfesoresComponent implements OnInit {

  public nombreApellidoDocente: string;

  constructor(private AuthDService: AuthDService) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.nombreApellidoDocente = this.AuthDService.getnombreApellidoDocente();
  }

}
