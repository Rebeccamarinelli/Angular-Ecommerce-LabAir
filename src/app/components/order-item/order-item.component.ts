import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss'
})
export class OrderItemComponent {

@Input() orderList:any;

}
