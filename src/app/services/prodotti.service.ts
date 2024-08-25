import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProdottiRes, IProdotti } from '../models/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

products:any;
filteredList:any;
baseUrl = 'http://localhost:3000/prodotti'


  constructor(private http: HttpClient) {}
    
  getAllProducts():Observable<any>{
    return  this.http.get<IProdottiRes>(this.baseUrl)
  }

  getProdById(id:number):Observable<IProdotti>{
    return this.http.get<IProdotti>(`${this.baseUrl}/${id}`)
  }

  getNewArrivals(): Observable<any> {
    return this.getAllProducts().pipe(
      map(products => products.filter(product => product.nuovo_arrivi))
    );
  }

  getBestSellers(): Observable<any[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(product => product.best_seller >= 4))
    );
  }

  getProductsByCategory(categoria: string): Observable<any[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(product => product.categoria === categoria))
    );
  }


}

