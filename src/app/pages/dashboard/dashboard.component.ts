import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  pastOrdersList:any=[]

constructor(private ordersService:OrdersService, private route:Router, private auth:AuthService){
this.ordersService.getAllOrders().subscribe((res)=>{
  console.log(res)
  this.pastOrdersList = res;
})

}

logout(){
  this.auth.logout();
  this.route.navigate(['home'])
  
}


}
