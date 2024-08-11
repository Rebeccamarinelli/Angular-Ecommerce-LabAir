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
  grandTotal:number = 0;
  listOfSize = [ 1, 2, 3, 4, 5]

 
  
  constructor(private cartService: CartService){}

  ngOnInit(): void{
    this.cartService.getProducts().subscribe((res) =>{
      this.productList = res;
      this.grandTotal = this.cartService.getTotalPlus()
    })

  }

  removeItem(item:IProdotti){
    this.cartService.removeCartItem(item)
    console.log(this.productList)
  }





}
