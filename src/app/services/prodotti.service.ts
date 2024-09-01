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

  // Metodo per ottenere prodotti con paginazione
  getProducts(startIndex: number, limit: number): Observable<any> {
    const url = `${this.baseUrl}?_start=${startIndex}&_limit=${limit}`;
    return this.http.get<any[]>(url);
  }
    
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

  getProductsByColor(color: string): Observable<any[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(product => product.colori_disponibili.includes(color)))
    );
  }

  getProductsByPrice(price:string){
    return this.getAllProducts().pipe(
      map((products) =>{
        switch (price) {
          case '50':
            return products.filter(product => product.prezzo < 50);
          case '50-100':
            return  products.filter(product => product.prezzo >= 50 && product.prezzo < 100);
          case '100-150':
            return  products.filter(product => product.prezzo >= 100 && product.prezzo <= 150);
          case '150':
            return  products.filter(product => product.prezzo > 150);
          default:
            return  products
        }
      } )
    );
  }


}

