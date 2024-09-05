import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-check-thanks',
  templateUrl: './check-thanks.component.html',
  styleUrl: './check-thanks.component.scss'
})
export class CheckThanksComponent {
  
  constructor(private cartService: CartService){
    
   this.cartService.clearCart()
      
  }


}