import { ChangeDetectorRef, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-banner-first',
  templateUrl: './header-banner-first.component.html',
  styleUrl: './header-banner-first.component.scss'
})
export class HeaderBannerFirstComponent {

  isLoggedIn:boolean = false

  constructor(private authService: AuthService){
  }

  ngOnInit(){
     this.authService.isLoggedIn().subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
  }

  
}
