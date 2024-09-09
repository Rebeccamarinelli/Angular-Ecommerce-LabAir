import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IOrder, IProdottiRes } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http:HttpClient) { }

  getAllOrders():Observable<IProdottiRes>{
    return this.http.get<IProdottiRes>('http://localhost:3000/orders')
  }

 

  postOrders(order:IOrder):Observable<IOrder>{
    return this.http.post<IOrder>('http://localhost:3000/orders', order)
  }


}
