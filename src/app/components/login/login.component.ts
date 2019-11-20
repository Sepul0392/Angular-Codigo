import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthDService } from "../../services/auth-d.service";
import { AuthAdminService } from '../../services/auth-admin.service';
import { error } from 'protractor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error1:boolean;
  error2:boolean;
  show:boolean
  resLogin:any

  constructor(private AuthAdminService: AuthAdminService, private AuthDService: AuthDService, private router: Router) { }

  ngOnInit() {
    this.error1 = false;
    this.error2 = false;
    this.show = false;
  }

  loadRES(){

  }

  onLoginDocente(form):void{
    this.show = true;
    this.error1 = true;
    this.error2 = false;
    console.log('login Docente', form.value);
    this.AuthDService.loginDocente(form.value).subscribe(res => {
      this.show = false;
      this.error1 = false;
      this.router.navigateByUrl('/inicioProfesores');
    });
  }

  onLoginAdmin(form):void{
    console.log('Login Admin', form.value);

    const LoginAdmin = {
      nombre_usuario: form.value.correo_electronico,
      contrasena: form.value.contrasena
    }

    this.show = true;
    this.error1 = false;
    this.error2 = true;

    this.AuthAdminService.loginAdmin(LoginAdmin).subscribe(res => {
      this.show = false;
      this.error1 = false;
      this.error2 = false;
      this.router.navigateByUrl('/inicioAdmin');
    });
  }

  onLoginVisitante(){
    console.log('login Visitante');
    this.router.navigateByUrl('/busquedaVisitante');
  }

}
