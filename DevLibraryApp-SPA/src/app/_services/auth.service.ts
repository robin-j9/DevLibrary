import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

  loginMode = new BehaviorSubject<boolean>(false);
  loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          this.loggedIn.next(true);
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}
