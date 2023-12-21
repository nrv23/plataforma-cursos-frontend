import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../modules/auth/service/auth.service';
import { IUser } from '../../interface/IUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user?: IUser =undefined;
  constructor( private auth:AuthService) {}

  ngOnInit(): void {
    
    this.auth.currentUser$.subscribe({
      next: response => {
        if(response) this.user = response;
      }
    })
  }

  logout() {
    this.auth.logout();
  }

}
