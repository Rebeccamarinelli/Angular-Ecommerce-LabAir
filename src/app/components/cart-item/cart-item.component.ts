import { Component} from '@angular/core';
import { IProdotti } from '../../models/models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss'
})
export class CartItemComponent {

  productList:IProdotti[] = [];

  constructor(private cartService: CartService){}

  ngOnInit(): void{
    this.cartService.getProducts().subscribe((res) =>{
      this.productList = res;
    })

    this.cartService.updateCart();

  }

   removeItem(item:IProdotti):void{
     this.cartService.removeCartItem(item)
     console.log(this.productList)
   }

  quantityMultiply(event:Event, i:number, selectedImage:string):void{
    const qty = +(event.target as HTMLInputElement).value;
    if(qty < 1){
     (event.target as HTMLInputElement).value = this.productList[i].quantity.toString();
      return;
    }else{
      if (this.productList[i].immagineSelezionata === selectedImage) {
        // Aggiorna la quantità solo se l'immagine selezionata è uguale a quella desiderata
        this.productList[i].quantity = qty;
        this.cartService.updateItemQuantity(this.productList[i].id, qty, this.productList[i].immagineSelezionata);
    }
  }
 
  }

  }
