import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { getErrorMessage } from '../../../utils/error';
import { IRegister } from '../../../interface/IRegister';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent {

  constructor(private authService: AuthService) { }

  email_login: string = "";
  password_login: string = "";

  register: IRegister = {
    email: "",
    password: "",
    name: "",
    surname: "",
    confirm_password: ""
  }

  login() {
    console.log(this);

    this.authService.login(this.email_login, this.password_login)
      .subscribe({
        next: response => {
          const { code, message } = response;
          console.log(response.data);
        },
        error: err => {
          const error = getErrorMessage(err);
          console.log(error);
        },
      })
  }

  newAccount() {

    if (this.register.password !== this.register.password) {
      console.log("No hay confirmacion de password");
      return;
    }

    this.authService.register(this.register)
      .subscribe({
        next: response => {
          const { code, message } = response;

          this.register = {
            email: "",
            password: "",
            name: "",
            surname: "",
            confirm_password: ""
          }

        }, error: err => {
          const error = getErrorMessage(err);
          console.log(error);
        }
      })
  }
}
