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

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });

    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: NavigationEnd) => {
      // Aggiungi qui le route per cui vuoi nascondere i componenti
      const routesToHide = ['/checkout-form', '/auth', '/thanks', '/auth/register', '/auth/login'];

      // Se la route corrente è inclusa in routesToHide, nascondi i componenti
      this.hideComponents = routesToHide.includes(event.urlAfterRedirects);
    });

  }



}
