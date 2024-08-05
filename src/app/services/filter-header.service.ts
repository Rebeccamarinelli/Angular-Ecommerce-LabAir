import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterHeaderService {


  private apiUrl = 'http://localhost:3000/prodotti'

  constructor(private http: HttpClient) { }

  // getAllProducts(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  // getFilteredByBest(): Observable<any[]> {
  //   return this.getAllProducts().pipe(
  //     map(products => products.filter(product => product.best_seller >= 4))
  //   );
  // }

  // getFilteredByNew(): Observable<any[]> {
  //   return this.getAllProducts().pipe(
  //     map(products => products.filter(product => product.nuovo_arrivi === true))
  //   );
  // }

 

}
