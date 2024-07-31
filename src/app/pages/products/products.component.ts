import { Component } from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { IProdottiRes } from '../../models/models';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

  prodottiArray:any;

  constructor(private prodottiServ: ProdottiService){

    this.prodottiServ.getAllProducts().subscribe((res:IProdottiRes) => {
      this.prodottiArray = res
    })

  }




}
