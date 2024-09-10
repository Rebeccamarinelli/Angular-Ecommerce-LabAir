import { Component } from '@angular/core';
import { IProdotti } from '../../models/models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-nav-check',
  templateUrl: './nav-check.component.html',
  styleUrl: './nav-check.component.scss'
})
export class NavCheckComponent {

  cartProduct:IProdotti[];
  totalItem:number;

  constructor(private cartService: CartService){
    this.cartService.getProducts().subscribe((res)=>{
      this.cartProduct = res;
      this.totalItem = this.cartProduct.reduce((sum, item) => sum + item.quantity, 0); 
    })
  }

}
