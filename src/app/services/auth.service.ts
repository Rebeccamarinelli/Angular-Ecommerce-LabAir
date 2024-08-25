import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILoginInfo } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  baseUrl = ' http://localhost:3000'

  registration(newUser:ILoginInfo): Observable<any>{
    return this.http.post(`${this.baseUrl}/users`, newUser)
  }


}
