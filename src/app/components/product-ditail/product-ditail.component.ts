import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { IProdotti } from '../../models/models';

@Component({
  selector: 'app-product-ditail',
  templateUrl: './product-ditail.component.html',
  styleUrl: './product-ditail.component.scss'
})
export class ProductDitailComponent {
  singleProduct: IProdotti;
  
  constructor(private activateRoute: ActivatedRoute, private serviceProduct: ProdottiService){

    this.activateRoute.params.subscribe((params)=>{
      console.log(params)
      this.serviceProduct.getProdById(params.id).subscribe((res)=>{
        this.singleProduct = res;
      })

    })
  }

  



}
