import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProdottiRes } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProdottiService {


baseUrl = 'http://localhost:3000/prodotti'

  constructor(private http: HttpClient) {}
    
  getAllProducts():any{
    return  this.http.get<IProdottiRes>(this.baseUrl)
  }

  }

