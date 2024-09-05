import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  hideComponents:boolean = false
  
  constructor(private router: Router) {}

  ngOnInit() : void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      const routesToHide = ['/checkout-form', '/auth', '/thanks', '/auth/register', '/auth/login'];
      this.hideComponents = routesToHide.includes(event.urlAfterRedirects);
    });

  }



}
