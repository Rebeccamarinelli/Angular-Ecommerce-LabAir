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

  products: any[] = [];
 //prodottiArray:any;
  currentIndex: number = 0;
  pageSize: number = 3;
  loadInfinite: boolean = true;
  totalProducts:number=0;
  loadProd:boolean=false

  


  constructor(private prodottiServ: ProdottiService, private route:Router){
    
    // this.prodottiServ.getAllProducts().subscribe((res:IProdottiRes) => {
    //   this.prodottiArray = res
    // 
    // })
  }

  ngOnInit(){
 
  }

  


  // onScroll(): void {
  //   if (this.loadInfinite && !this.loading) {
  //     this.loadMoreProducts();
  //   }
  // }

  getId(id:number){
    // console.log(id)
    this.route.navigate(['products', id])
  }




  // onScroll(): void {
  //   if (!this.loadInfinite) {
  //     this.loadMoreProducts();
  //   }
  // }


  // riceviFilterBest(filter:any){
  //   this.filteredList = filter
  //   console.log(this.filteredList)
  // }

  // riceviFilterNew(filter:any){
  //   this.filteredList = filter
  //   (this.filteredList)
  // }
 
  



}
