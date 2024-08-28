import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginInfo } from '../models/models';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

    const accessToken = localStorage.getItem('accessToken');
    this.loggedIn.next(!!accessToken);

  }

  baseUrl = ' http://localhost:3000';
  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  login(userInfo:ILoginInfo): Observable<any>{
    this.http.post(`${this.baseUrl}/login`, userInfo)
    this.loggedIn.next(true);
    return  this.http.post(`${this.baseUrl}/login`, userInfo)
  }

  registration(newUser:ILoginInfo): Observable<any>{
    return this.http.post(`${this.baseUrl}/register`, newUser)
  }


}
