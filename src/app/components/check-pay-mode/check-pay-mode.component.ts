import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { IProdotti } from '../../models/models';
import { CartService } from '../../services/cart.service';
import { OrdersService } from '../../services/orders.service';
import { AuthService } from '../../services/auth.service';

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

  // // Ottieni il giorno, mese e anno
  // const year = today.getFullYear();
  // const month = String(today.getMonth() + 1).padStart(2, '0'); // `getMonth()` ritorna valori da 0 a 11, quindi aggiungi 1
  // const day = String(today.getDate()).padStart(2, '0'); // `getDate()` ritorna il giorno del mese
  
  // // Formatta la data
  // this.date = `${day}-${month}-${year}`;
  


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

   this.cartService.getProducts().subscribe((res)=>{
    const userId = this.authService.getUserId(); 
    this.cartProducts = res;
    this.cartProducts.forEach((product)=>{
      this.orderService.postOrders({
        userId:userId,
        ...product,
        data: this.date,
      }).subscribe((res)=>{
        console.log(res)
      })
    })
   })


   this.thanks = true
   // al click in questa funzione devo inviare i dati con Post al database di orders
 }




}
