import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { IOrder} from '../../models/models';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrl: './order-item.component.scss'
})
export class OrderItemComponent {

@Input() orderList:IOrder[];

}
