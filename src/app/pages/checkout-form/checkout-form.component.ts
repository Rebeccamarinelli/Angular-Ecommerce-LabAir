import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { IProdotti } from '../../models/models';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrl: './checkout-form.component.scss'
})
export class CheckoutFormComponent {

  cartProduct:IProdotti[];
  totalItem:number;

  constructor(private cartService: CartService){
    this.cartService.getProducts().subscribe((res)=>{
      this.cartProduct = res;
      this.totalItem = this.cartProduct.reduce((sum, item) => sum + item.quantity, 0); 
    })
  }

  emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  capPattern = /^[0-9]{5}$/;
  phonePattern = /^(?:(?:\+|00)39)?\s?(?:3[1-9]\d{2}|0\d{2,4})\s?\d{6,8}$/;
  addressPattern = /^[a-zA-Z0-9\s,.'-]{10,}$/;
  nameAndSurnamePattern = /^[a-zA-ZàèéìòùÀÈÉÌÒÙ' -]+$/;

  isVisibile: boolean = true
  isHidden: boolean = false
  data:Object;
  thanks:boolean = true

  dataSend(form:NgForm){
    console.log(form.value)
    this.isVisibile = false;
    this.isHidden = true;
    this.data = form.value;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    console.log(this.data)
  }


}
