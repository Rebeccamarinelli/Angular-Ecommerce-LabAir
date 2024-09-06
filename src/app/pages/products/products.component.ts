import { Component, Input} from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { IProdottiRes } from '../../models/models';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  

  constructor(private route:Router, private prodotti:ProdottiService){
  }


  getId(id:number):void{
    this.route.navigate(['products', id])
  }


}
