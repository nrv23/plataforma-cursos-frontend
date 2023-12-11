import { IUser } from './../../../interface/IUser';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getApiUrl } from '../../../utils/api';
import { map, of, BehaviorSubject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IResponse } from '../../../interface/IResponse';
import { ILoginResponse } from '../../../interface/ILoginResponse';
import { save } from '../../../utils/storage';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api_url = getApiUrl();
  private currentUser = new BehaviorSubject<IUser | null>(null);

  currentUser$ = this.currentUser.asObservable();

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, password: string) {

    return this.http.post<IResponse<ILoginResponse>>(this.api_url + "/users/login", { email, password })
      .pipe(
        map(response => {
          const { token, user } = response.data;
          save("token", token);
          this.setCurrentUser(user);
          return response;
        })
      )
  }

  setCurrentUser(user: IUser) {
    this.currentUser.next(user);
  }
}
