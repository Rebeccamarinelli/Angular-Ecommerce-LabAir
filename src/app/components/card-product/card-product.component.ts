import { Component, EventEmitter, Input, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { map } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
 //@Input() products:any;
  @Output() goIntoDitails: EventEmitter<number> = new EventEmitter
  filteredList:any

 products: any[] = [];
 // prodottiArray:any;
 currentIndex: number = 0;
  pageSize: number = 10;
  loadInfinite: boolean = true;
  totalProducts:number=0;
  loadProd:boolean=false

  loading = false; // Variabile per controllare lo stato dello spinner

  constructor(private activetedRouter: ActivatedRoute, private prodottiServ: ProdottiService, private spinner: NgxSpinnerService){
    

  }
       // if (this.products.length <= this.totalProducts) {
      //   this.loadInfinite = false;  
      //   return;
      
      // }



      

  // loadMoreProducts(): void {
   
  //   this.loadProd = true;
  //   this.prodottiServ.getProducts(this.currentIndex, this.pageSize).subscribe(newProducts => {
  //     this.products = [...this.products, ...newProducts];
  //     this.currentIndex += this.pageSize;
  //     console.log(this.products, newProducts)
  //     this.loadProd = false;

  //     console.log(this.products, this.pageSize, this.currentIndex)
  //     if (this.totalProducts === 0 && newProducts.length > 0) {
  //       this.totalProducts = 50; // Supponiamo di conoscere il numero totale, qui è un esempio statico
  //       console.log(this.totalProducts)
  //     }
  //   });
  // }


  loadMoreProducts(): void {
    if (this.products.length >= this.totalProducts) {
      this.loadInfinite = false; // Ferma il caricamento se tutti i prodotti sono stati caricati
      return;
    }

    this.loadProd = true;
    this.prodottiServ.getProducts(this.currentIndex, this.pageSize).subscribe(newProducts => {
      this.products = [...this.products, ...newProducts];
      this.currentIndex += this.pageSize;
      this.loadProd = false;

      if (newProducts.length === 0 || this.products.length >= this.totalProducts) {
        this.loadInfinite = false; // Disattiva il caricamento se non ci sono più prodotti
      }

      console.log(this.products, newProducts, this.totalProducts);
    });
  }


  onScroll(): void {
    const container = document.getElementById('scroll-container');
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollTop + clientHeight >= scrollHeight - 10 && !this.loadProd && this.loadInfinite) {
        this.loadMoreProducts();
        console.log('Scorri per caricare più prodotti');
      }
    }
  }


  //  onScroll(): void {
  //    const container = document.getElementById('scroll-container');
  //    if (container) {
  //      const { scrollTop, scrollHeight, clientHeight } = container;
  //      if (scrollTop + clientHeight >= scrollHeight - 10 && !this.loadProd) {
  //        this.loadMoreProducts();
  //        console.log(scrollTop + clientHeight >= scrollHeight - 10)
  //      }
  //    }
  //  }




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
        //  this.prodottiServ.getAllProducts().subscribe((res) =>{
        //    this.products = res;
        // });
      //   this.prodottiServ.getProducts(this.currentIndex, this.pageSize).subscribe(newProducts => {
      //     this.products = newProducts;
      //     //console.log(this.products)
      //     this.loadMoreProducts()
      //  })
       this.loading = true; // Mostra lo spinner
      this.spinner.show(); // Per ngx-spinner

      this.prodottiServ.getProducts(this.currentIndex, this.pageSize).subscribe(newProducts => {
        this.products = newProducts;
        this.loading = false; // Nasconde lo spinner
         this.spinner.hide(); // Per ngx-spinner
        this.currentIndex += this.pageSize;
        if (this.totalProducts === 0 && newProducts.length > 0) {
          this.totalProducts = 50; // Imposta il totale dei prodotti, esempio statico
          // Se l'API fornisce il numero totale, puoi impostarlo qui
        }
      });

       }
    });
  }







}
