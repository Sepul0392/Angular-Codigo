import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthDService } from "../../services/auth-d.service";
import { AuthAdminService } from '../../services/auth-admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private AuthAdminService: AuthAdminService, private AuthDService: AuthDService, private router: Router) { }

  ngOnInit() {
  }

  onLoginDocente(form):void{
    console.log('login Docente', form.value);
    this.AuthDService.loginDocente(form.value).subscribe(res => {
      this.router.navigateByUrl('/inicioProfesores');
    });
  }

  onLoginAdmin(form):void{
    console.log('Login Admin', form.value);

    const LoginAdmin = {
      nombre_usuario: form.value.correo_electronico,
      contrasena: form.value.contrasena
    }
    this.AuthAdminService.loginAdmin(LoginAdmin).subscribe(res => {
      this.router.navigateByUrl('/inicioAdmin');
    });
  }

  onLoginVisitante(){
    console.log('login Visitante');
    this.router.navigateByUrl('/busquedaVisitante');
  }

}
