import { Component } from '@angular/core';
import { IProdotti } from '../../models/models';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  products:IProdotti[];

  constructor(private cartService : CartService){}

  ngOnInit():void{
    this.cartService.getProducts().subscribe((res)=>{ this.products = res}
    )
  }

 


}
