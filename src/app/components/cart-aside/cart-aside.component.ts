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

    ngOnInit():void{
      this.cartService.totalPrice.subscribe((total)=>{
        this.total = +total.toFixed(2);
      })
     

     }

     getDynamicRouterLink(): string {
      const accessToken:string = localStorage.getItem('token');
      if (accessToken) {
        return '/checkout-form';  // Se il token è presente, va al form
      } else {
        return '/auth'; // Se il token non è presente, va alla pagina di login
      }
    }
 


  
  

     
}
