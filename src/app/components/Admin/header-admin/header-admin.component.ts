import { AuthAdminService } from '../../../services/auth-admin.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private router: Router, private AuthAdminService: AuthAdminService) { }

  ngOnInit() {
  }

  logOut(){
    this.AuthAdminService.logout();
    this.router.navigateByUrl('/login')
  }

}
