import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {

  constructor(private authService: AuthService) {}

  email_login: string ="";
  password_login: string ="";

  login() {
    console.log(this);

    this.authService.login(this.email_login, this.password_login)
      .subscribe({
        next: response => {
          console.log(response.data);
        },
        error: err => {
          console.log(err)
        },
      })
  }
}
