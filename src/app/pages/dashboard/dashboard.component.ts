import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  pastOrdersList:any=[]

constructor(private ordersService:OrdersService){
this.ordersService.getAllOrders().subscribe((res)=>{
  console.log(res)
  this.pastOrdersList = res;
})

}



}
