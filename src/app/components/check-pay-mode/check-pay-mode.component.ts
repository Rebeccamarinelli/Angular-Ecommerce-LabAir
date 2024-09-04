import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { IProdotti } from '../../models/models';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';
import { AuthService } from '../../services/auth.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-check-pay-mode',
  templateUrl: './check-pay-mode.component.html',
  styleUrl: './check-pay-mode.component.scss'
})
export class CheckPayModeComponent {

@Input() dataDitails:any;
thanks:boolean = false;
cartProducts:IProdotti[];
date:any;

@Output() thanksSend: EventEmitter<boolean> = new EventEmitter;

 cardPattern = /^\d{16}$/;
 scadenzaPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
 cvvPattern = /^\d{3,4}$/;

constructor(private cartService:CartService, private orderService:OrdersService, private authService:AuthService){
  this.date = new Date();
}

//  ngOnInit(){
//   this.cartService.getProducts().subscribe((res)=>{
//     this.cartProducts = res;
//     console.log(this.cartProducts)
//   })
// }



 dataPaySend(e:Event,form:NgForm){
  e.preventDefault()
   console.log(form);

   this.cartService.getProducts().pipe(take(1)).subscribe((res)=>{
    const userId = this.authService.getUserId(); 
    this.cartProducts = res;
    if(localStorage.getItem('token')){
      this.cartProducts.forEach((product)=>{
        // Destruttura le proprietà che vuoi escludere
     const { taglie_disponibili, colori_disponibili, colori_immagini, immagini_dettaglio, descrizione, immagine, nuovo_arrivi, best_seller, ...filteredProduct } = product;
       
     this.orderService.postOrders({
       ...filteredProduct,  // Includi tutte le proprietà che restano
       id: Date.now(), // ID unico
       userId: userId,
       data: this.date
       
       }).subscribe((res)=>{
         console.log(res)
       })
     })
    }

    
   })


   this.thanks = true
   // al click in questa funzione devo inviare i dati con Post al database di orders
 }




}
