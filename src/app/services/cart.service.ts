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

  
  
  private totalPrice = new BehaviorSubject<number>(0);
  totalPrice$ = this.totalPrice.asObservable();  // Osservabile per il prezzo totale
 
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
    
    //this.productList.next(this.cartItemList);
    this.updateCart()
    
  }

 

  updateItemQuantity(id: number, quantity: number, imm:string): void {
    const item = this.cartItemList.find(i => i.id === id && i.immagineSelezionata === imm);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
       item.quantity = 1
      }
    }
    this.updateCart();
  }



  // Aggiorna lo stato del carrello e il prezzo totale
  updateCart(): void {
    this.productList.next([...this.cartItemList]);  // Emesso nuovo stato della lista dei prodotti
    this.totalPrice.next(this.calculateTotalPrice());  // Emesso nuovo stato del prezzo totale
  }

  clearCart():void{
    this.cartItemList = [];
    this.updateCart()
  }

  // Calcola il prezzo totale del carrello
  calculateTotalPrice(): number {
    return this.cartItemList.reduce((sum, item) => {
      return sum + item.prezzo * item.quantity;
  }, 0);
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
        console.log('Nuovo totale:', this.total);
    
      
    }
    this.updateCart();
  })
}





  
}
