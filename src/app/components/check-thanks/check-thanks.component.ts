import { Component } from '@angular/core';
import { IProdotti } from '../../models/models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-check-thanks',
  templateUrl: './check-thanks.component.html',
  styleUrl: './check-thanks.component.scss'
})
export class CheckThanksComponent {
  
  cartProduct:IProdotti[];
  totalItem:number;

  constructor(private cartService: CartService){
    
    this.cartService.clearCart()
     
   
  }

  // reLoad(){
  //   window.location.reload()
  // }

}