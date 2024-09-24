import { Component} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  

  constructor(private route:Router,){}


  getId(id:number):void{
    this.route.navigate(['products', id])
  }


}
