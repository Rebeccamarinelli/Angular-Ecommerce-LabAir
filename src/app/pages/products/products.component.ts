import { Component, Input} from '@angular/core';
import { ProdottiService } from '../../services/prodotti.service';
import { IProdottiRes } from '../../models/models';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

 
  prodottiArray:any;


  

  constructor(private prodottiServ: ProdottiService, private route:Router, private activetedRouter: ActivatedRoute){

    this.prodottiServ.getAllProducts().subscribe((res:IProdottiRes) => {
      this.prodottiArray = res
    })


  }

  getId(id:number){
    console.log(id)
    this.route.navigate(['products', id])
  }


  // riceviFilterBest(filter:any){
  //   this.filteredList = filter
  //   console.log(this.filteredList)
  // }

  // riceviFilterNew(filter:any){
  //   this.filteredList = filter
  //   (this.filteredList)
  // }
 
  



}
