import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProdotti } from '../../models/models';

@Component({
  selector: 'app-check-aside',
  templateUrl: './check-aside.component.html',
  styleUrl: './check-aside.component.scss'
})
export class CheckAsideComponent {

  cartProducts:IProdotti[];
  total:number;
  constructor(private cartService: CartService){}


  ngOnInit(){
    this.cartService.getProducts().subscribe((res)=>{
      this.cartProducts = res;
      console.log(this.cartProducts)
    })

    this.cartService.totalPrice$.subscribe((total) => {
      this.total = parseFloat(total.toFixed(2));
      console.log(total)    
    });

  }


}
