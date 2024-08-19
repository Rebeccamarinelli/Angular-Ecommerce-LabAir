import { Component, EventEmitter, Output } from '@angular/core';
import { IProdotti } from '../../models/models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  productList:IProdotti[] = []
  listOfSize = [1, 2, 3, 4, 5]

 
  
  constructor(private cartService: CartService){}

  ngOnInit(): void{
    this.cartService.getProducts().subscribe((res) =>{
      this.productList = res;
    })

    this.cartService.updateCart();

  }

   removeItem(item:IProdotti){
     this.cartService.removeCartItem(item)
     console.log(this.productList)
   }

  

  quantityMultiply(event:any, i:number){
    const qty = +event.target.value;
    if(qty < 1){
      event.target.value = this.productList[i].quantity;
      return;
    }else{
      this.productList[i].quantity = qty
      this.cartService.updateItemQuantity(this.productList[i].id, qty);
    }
  }
 
  

}
