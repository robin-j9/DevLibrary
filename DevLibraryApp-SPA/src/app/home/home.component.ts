import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn: boolean;
  loginMode: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.loggedIn.subscribe(response => {
      this.loggedIn = response;
    });
    this.authService.loginMode.subscribe(response => {
      this.loginMode = response;
    });
  }

}
