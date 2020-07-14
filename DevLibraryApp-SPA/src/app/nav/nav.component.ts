import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  loggedIn: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.loggedIn.subscribe((response) => {
      this.loggedIn = response;
    });
  }

  showLogin() {
    this.authService.loginMode.next(true);
    this.authService.registerMode.next(false);
  }

  showRegister() {
    this.authService.registerMode.next(true);
    this.authService.loginMode.next(false);
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
    this.authService.loggedIn.next(false);
    this.authService.loginMode.next(false);
  }
}
