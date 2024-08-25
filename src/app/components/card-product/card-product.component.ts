import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
  @Input() products:any;
  @Output() goIntoDitails: EventEmitter<number> = new EventEmitter
  filteredList:any


  constructor(private activetedRouter: ActivatedRoute, private prodottiServ: ProdottiService){
    

  }

  getlenght(array:[]){
    return array.length
  }

  onImageClick(id:number){
      this.goIntoDitails.emit(id)
    }
  
  riceviFilteredList(arrayFiltrato:any){
    this.products = arrayFiltrato
  }

  ngOnInit() {
    this.activetedRouter.queryParams.subscribe(params => {
       if (params['filter'] === 'new_arrivals') {
         this.prodottiServ.getNewArrivals().subscribe((res) => {
           this.products = res;    
         });
       } else if (params['filter'] === 'best_sellers') {
         this.prodottiServ.getBestSellers().subscribe(res => this.products = res
         );
       } else if (params['category']) {
         this.prodottiServ.getProductsByCategory(params['category']).subscribe(res => this.products = res
          
         );
       } else {
         this.prodottiServ.getAllProducts().subscribe((res) =>{
           this.products = res;
         });
       }
    });
  }



}
