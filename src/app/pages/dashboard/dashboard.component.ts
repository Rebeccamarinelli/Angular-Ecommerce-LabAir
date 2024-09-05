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
  errorMessage: string = '';
  

constructor(private ordersService:OrdersService,
            private route:Router,
            private auth:AuthService){


  this.ordersService.getAllOrders().subscribe((res)=>{
    console.log(res)
    this.pastOrdersList = res;
  },
  (error) => {
    console.log(error)
    if(error.status === 401){
      this.route.navigate(['auth', 'login']);
    }else if(error.status === 0 || error.status === 400){
      this.errorMessage = 'Errore 400 qualcosa è andato storto nel caricamento dei prodotti'
    }else if(error.status === 500){
      this.errorMessage = 'Errore 500 Internal Server Error'
    }
  })
  
}

logout():void{
  this.auth.logout();
  this.route.navigate(['home']) 
}


}
