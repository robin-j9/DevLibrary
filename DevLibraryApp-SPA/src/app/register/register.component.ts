import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register() {
    console.log('registration submitted');
    this.authService.register(this.model).subscribe(
      (next) => {
        console.log('Registration successful');
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
