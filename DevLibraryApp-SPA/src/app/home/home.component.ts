import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  loginMode: boolean;

  registered: boolean;
  registerMode: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    // TODO: clean up repetitive code && better way to conditionally render login/register forms
    this.authService.loggedIn.subscribe((response) => {
      this.loggedIn = response;
    });
    this.authService.loginMode.subscribe((response) => {
      this.loginMode = response;
    });
    this.authService.registered.subscribe((response) => {
      this.registered = response;
    });
    this.authService.registerMode.subscribe((response) => {
      this.registerMode = response;
    });
  }
}
