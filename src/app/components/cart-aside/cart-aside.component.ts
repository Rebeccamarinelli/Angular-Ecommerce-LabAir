import { Component} from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-aside',
  templateUrl: './cart-aside.component.html',
  styleUrl: './cart-aside.component.scss'
})
export class CartAsideComponent {


  total:number = 0

  constructor(private cartService: CartService){}

   ngOnInit(){
    
      // Iscriviti al total$ per ottenere aggiornamenti del totale
      this.cartService.total$.subscribe((total) => {
        this.total = parseFloat(total.toFixed(2));
        console.log(total)    
      });
    
     }

     
}
