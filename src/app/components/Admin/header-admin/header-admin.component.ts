import { AuthAdminService } from '../../../services/auth-admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  IPServer:string;

  constructor(private router: Router, private AuthAdminService: AuthAdminService) { }

  ngOnInit() {
    this.IPServer = this.AuthAdminService.loadIPServer();
  }

  logOut(){
    this.AuthAdminService.logout();
    this.router.navigateByUrl('/login')
  }

  //Abrir nueva ventana para ver el Manual
  verManual(){
    const urlLoad = 'http://'+this.IPServer+':3000/repositorio/manual.pdf';
    //console.log('urlload', urlLoad);
    window.open(urlLoad, "_blank");
  }

}
