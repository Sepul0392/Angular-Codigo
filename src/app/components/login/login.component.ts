import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthDService } from "../../services/auth-d.service";
import { AuthAdminService } from '../../services/auth-admin.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error1:boolean;
  error2:boolean;
  correctoIP:boolean;
  errorIP:boolean;
  temp:string;

  constructor(private AuthAdminService: AuthAdminService, private AuthDService: AuthDService, private router: Router) { }

  ngOnInit() {
    this.error1 = false;
    this.error2 = false;
    this.correctoIP = false;
    this.errorIP = false;

    this.temp = this.AuthAdminService.loadIPServer();
    console.log('IPServer Actual',this.temp);
    this.comprobarConeccion();
  }

  onLoginDocente(form):void{
    this.error1 = true;
    this.error2 = false;
    //console.log('login Docente', form.value);
    this.AuthDService.loginDocente(form.value).subscribe(res => {
      this.error1 = false;
      this.error2 = false;
      this.router.navigateByUrl('/inicioProfesores');
    });
  }

  onLoginAdmin(form):void{
    //console.log('Login Admin', form.value);
    const LoginAdmin = {
      nombre_usuario: form.value.correo_electronico,
      contrasena: form.value.contrasena
    }
    this.error1 = false;
    this.error2 = true;

    this.AuthAdminService.loginAdmin(LoginAdmin).subscribe(res => {
      this.error1 = false;
      this.error2 = false;
      this.router.navigateByUrl('/inicioAdmin');
    });
  }

  onLoginVisitante(){
    //console.log('login Visitante');
    this.router.navigateByUrl('/busquedaVisitante');
  }

  actualizarIPServer(form: NgForm){
    this.AuthAdminService.saveIPServer(form.value.IPServer);
    this.temp = this.AuthAdminService.loadIPServer();
    //console.log('localStorage test',this.temp);
    this.comprobarConeccion();
    this.resetForm(form);
  }

  comprobarConeccion(){
    this.correctoIP = false;
    this.errorIP = true;
    const Info = {
      id_colegio: 0
    }
    this.AuthAdminService.pruebaIP().subscribe(res => {
      //console.log('Verificacion Conexion', res);
      this.correctoIP = true;
      this.errorIP = false;
    });
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      window.scrollTo(0, 0);
    }
  }

}
