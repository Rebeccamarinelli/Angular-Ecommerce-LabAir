import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IProdotti } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemList = [];
  productList = new BehaviorSubject<any>([]);
  
  total: number = 0

  private totalSubject = new BehaviorSubject<number>(this.total);
  total$ = this.totalSubject.asObservable(); // Observable a cui il componente si può iscrivere
 
  constructor() { }

  getProducts():Observable<any>{
    return this.productList.asObservable()
  }

  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productList.next(product)
  }

  addToCart(product:any){

    const productCopy = { ...product };

    let existingProduct = this.cartItemList.find(item =>
      item.id === productCopy.id &&
      item.coloreSelezionato === productCopy.coloreSelezionato &&
      item.tagliaSelezionata === productCopy.tagliaSelezionata &&
      item.immagineSelezionata === productCopy.immagineSelezionata
    );
  
    if (existingProduct) {
      // Se esiste un prodotto con tutte le stesse proprietà, aumenta solo la quantità
      existingProduct.quantity += product.quantity;
    } else {
      // Se il prodotto non esiste, aggiungilo come nuovo elemento creo una copia per eliminare il problema della sovrascrizione
      this.cartItemList.push(productCopy);
    }
    
    this.productList.next(this.cartItemList);
    
  }


  getTotalPlus():number{
    let total = 0;
    this.cartItemList.map((price)=>{
      total += price.prezzo * price.quantity;
      this.total = total;
      this.totalSubject.next(this.total);
    })
    return this.total
  }



  removeCartItem(product:IProdotti){
    this.cartItemList.filter((prod, index)=>{
      if(product.id === prod.id && 
      product.coloreSelezionato === prod.coloreSelezionato &&
      product.tagliaSelezionata === prod.tagliaSelezionata &&
      product.immagineSelezionata === prod.immagineSelezionata
      ){
        const itemTotalPrice = this.cartItemList[index].quantity * this.cartItemList[index].prezzo;
        console.log(this.cartItemList[index].prezzo * this.cartItemList[index].quantity)
        this.cartItemList.splice(index, 1)
        this.total -= itemTotalPrice;
        this.totalSubject.next(this.total);
        console.log('Nuovo totale:', this.total);
    
      
    }
    this.productList.next(this.cartItemList);
  })
}






  
}
