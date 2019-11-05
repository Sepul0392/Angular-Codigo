import { AuthDService } from '../../services/auth-d.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private AuthDService: AuthDService, private router: Router) { }

  ngOnInit() {
  }

  logOut(){
    this.AuthDService.logout();
    this.router.navigateByUrl('/login')
  }

}
