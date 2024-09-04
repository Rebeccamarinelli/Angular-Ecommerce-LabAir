import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginInfo, ILoginRes, ITokenPayload } from '../models/models';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { BASE_URL } from '../shared/validators/base.url';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

    const accessToken:string = localStorage.getItem('accessToken');
    this.loggedIn.next(!!accessToken);

  }

  baseUrl = BASE_URL; 
  private loggedIn = new BehaviorSubject<boolean>(false);

  isLoggedIn():Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(userInfo:ILoginInfo): Observable<ILoginRes>{
    this.http.post<ILoginRes>(`${this.baseUrl}/login`, userInfo)
    this.loggedIn.next(true);
    return  this.http.post<ILoginRes>(`${this.baseUrl}/login`, userInfo)
  }

  logout():void{
    localStorage.removeItem('token')
    this.loggedIn.next(false);
  }

  registration(newUser:ILoginInfo): Observable<ILoginRes>{
    return this.http.post<ILoginRes>(`${this.baseUrl}/register`, newUser)
  }


   // Funzione per ottenere l'ID dell'utente dal token memorizzato nel localStorage
   getUserId(): string | null {
    const token:string = localStorage.getItem('token');
    if (token) {
      // Decodificare il token JWT e ottenere l'ID utente
      // Nota: Questa è una semplice simulazione, normalmente dovresti usare una libreria per decodificare JWT
      try {
        const tokenPayload: ITokenPayload = JSON.parse(atob(token.split('.')[1]));
         return tokenPayload.sub; // Supponendo che il token contenga un campo "userId"
      } catch (error) {
        console.error('Errore nella decodifica del token:', error);
        return null;
      }
    }
    return null;
  }

}



