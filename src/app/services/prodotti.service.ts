import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProdotti } from '../models/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProdottiService {

products:IProdotti[];
baseUrl = 'http://localhost:3000/prodotti'


  constructor(private http: HttpClient) {}

  getProducts(startIndex: number, limit: number): Observable<IProdotti[]> {
    const url:string = `${this.baseUrl}?_start=${startIndex}&_limit=${limit}`;
    return this.http.get<IProdotti[]>(url);
  }
    
  getAllProducts():Observable<IProdotti[]>{
    return  this.http.get<IProdotti[]>(this.baseUrl)
  }

  getProdById(id:number):Observable<IProdotti>{
    return this.http.get<IProdotti>(`${this.baseUrl}/${id}`)
  }

  getNewArrivals(): Observable<IProdotti[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(product => product.nuovo_arrivi))
    );
  }

  getBestSellers(): Observable<IProdotti[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(product => product.best_seller >= 4))
    );
  }

  getProductsByCategory(categoria: string): Observable<IProdotti[]> {
    return this.getAllProducts().pipe(
      map(products => products.filter(product => product.categoria === categoria))
    );
  }

  getProductsByColor(color: string): Observable<IProdotti[]> {
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

