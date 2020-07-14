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
    if (this.model.password !== this.model.passwordConfirmation) {
      console.log('passwords do not match');
    } else {
      return this.authService.register(this.model).subscribe(
        (next) => {
          console.log('registration successful');
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
