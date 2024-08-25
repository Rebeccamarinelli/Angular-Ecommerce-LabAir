import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  isVisibile:boolean;

  constructor(private route:Router){
    this.route.events.subscribe(event => {
      if(event instanceof NavigationEnd && event.url === '/auth/register' || event instanceof NavigationEnd && event.url === '/auth/login'){
        this.isVisibile = false
      }else if(event instanceof NavigationEnd && event.url === '/auth'){
        this.isVisibile = true
      }
    })
  }

}
