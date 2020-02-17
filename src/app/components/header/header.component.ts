import { AuthDService } from '../../services/auth-d.service';
import { AuthAdminService } from '../../services/auth-admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  IPServer:string;

  constructor(private AuthDService: AuthDService, private router: Router, private AuthAdminService: AuthAdminService) { }

  ngOnInit() {
    this.IPServer = this.AuthAdminService.loadIPServer();
  }

  /**
  * Permite realizar el LogOut del profesor en el sistema
  */
  logOut(){
    this.AuthDService.logout();
    this.router.navigateByUrl('/login')
  }

  /**
  * Permite visualizar el manual en una nueva ventana del navegador
  */
  verManual(){
    const urlLoad = 'http://'+this.IPServer+':3000/repositorio/manual.pdf';
    //console.log('urlload', urlLoad);
    window.open(urlLoad, "_blank");
  }

}
