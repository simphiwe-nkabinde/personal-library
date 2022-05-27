import { Component, OnInit } from '@angular/core';
import * as jwt from 'jsonwebtoken';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: any;
  showUser: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.loadUser()
  }

  loadUser() {
    const token = sessionStorage.getItem('USER_LOGGED');
    if (token) {
      var decoded = jwt_decode(token);
      console.log(decoded);
      
      this.user = decoded;
      this.showUser = true;
    }
  }

  logout() {
    const token = sessionStorage.removeItem('USER_LOGGED');
    window.location.reload()
  }

}
