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


   // Funzione per ottenere l'ID dell'utente dal token memorizzato nel localStorage
   getUserId(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      // Decodificare il token JWT e ottenere l'ID utente
      // Nota: Questa è una semplice simulazione, normalmente dovresti usare una libreria per decodificare JWT
      try {
        const tokenPayload = JSON.parse(atob(token.split('.')[1]));
        return tokenPayload.sub; // Supponendo che il token contenga un campo "userId"
      } catch (error) {
        console.error('Errore nella decodifica del token:', error);
        return null;
      }
    }
    return null;
  }

}



