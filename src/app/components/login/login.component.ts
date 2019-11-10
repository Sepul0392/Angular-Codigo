import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthDService } from "../../services/auth-d.service";
import { DocenteI } from '../../models/docente';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthDService: AuthDService, private router: Router) { }

  ngOnInit() {
  }

  onLoginDocente(form):void{
    console.log('login', form.value);
    this.AuthDService.loginDocente(form.value).subscribe(res => {
      this.router.navigateByUrl('/inicioProfesores')
    })
  }

}
