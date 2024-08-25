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

 
  prodottiArray:any;

  loading = false; // Variabile per controllare lo stato dello spinner


  constructor(private prodottiServ: ProdottiService, private route:Router, private spinner: NgxSpinnerService){
    this.loading = true; // Mostra lo spinner
    this.spinner.show(); // Per ngx-spinner
    this.prodottiServ.getAllProducts().subscribe((res:IProdottiRes) => {
      this.prodottiArray = res
      this.loading = false; // Nasconde lo spinner
      this.spinner.hide(); // Per ngx-spinner
    })


  }

  getId(id:number){
    // console.log(id)
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
