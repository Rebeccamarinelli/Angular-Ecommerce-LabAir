import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): MaybeAsync<GuardResult> {

      const token: string | null = localStorage.getItem('token');
      console.log('sono nella guard')
      if(token !== null){
        return true;
      }else{
        this.route.navigate(['auth', 'login'])
        return false;
      }
  }
  
}
