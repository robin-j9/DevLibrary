import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService
  ) {}

  ngOnInit() {}

  register() {
    console.log('registration submitted');
    this.authService.register(this.model).subscribe(
      (next) => {
        this.alertify.success('Registration successful');
      },
      (error) => {
        this.alertify.error(error);
      }
    );
  }
}
