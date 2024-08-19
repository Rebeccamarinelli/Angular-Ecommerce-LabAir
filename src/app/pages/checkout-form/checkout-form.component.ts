import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProdotti } from '../../models/models';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss'
})
export class CheckoutFormComponent {

  cartProduct:IProdotti[];
  totalItem:number;

  constructor(private cartService: CartService){
    this.cartService.getProducts().subscribe((res)=>{
      this.cartProduct = res;
      this.totalItem = this.cartProduct.reduce((sum, item) => sum + item.quantity, 0); 
    })
  }


}
