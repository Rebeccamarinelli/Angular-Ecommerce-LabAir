import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

@Component({
  selector: 'app-check-pay-mode',
  templateUrl: './check-pay-mode.component.html',
  styleUrl: './check-pay-mode.component.scss'
})
export class CheckPayModeComponent {

@Input() dataDitails:any;
thanks:boolean = false;

@Output() thanksSend: EventEmitter<boolean> = new EventEmitter;

 cardPattern = /^\d{16}$/;
 scadenzaPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
 cvvPattern = /^\d{3,4}$/;


 dataPaySend(e:Event,form:NgForm){
  e.preventDefault()
   console.log(form);
   this.thanks = true
 }



}
