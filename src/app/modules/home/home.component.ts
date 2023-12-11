import { Component, OnInit } from '@angular/core';
declare function HOMEINIT([]):any;
declare var $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    setTimeout(() => {
      HOMEINIT($);
    }, 50);
  }
}
