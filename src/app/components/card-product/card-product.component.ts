import { Component, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {
//  @Input() products:any;
  @Output() goIntoDitails: EventEmitter<number> = new EventEmitter
  filteredList:any

 products: any[] = [];
 // prodottiArray:any;
  currentIndex: number = 0;
  pageSize: number = 20;
  loadInfinite: boolean = true;
  totalProducts:number=0;
  loadProd:boolean=false

  loading = false; // Variabile per controllare lo stato dello spinner

  constructor(
    private activetedRouter: ActivatedRoute, 
    private prodottiServ: ProdottiService, 
    private spinner: NgxSpinnerService, 
    private router:Router){
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
      
       if (params['filter'] === 'nuovo_arrivi') {
          this.loading = true;
          this.spinner.show(); // Mostra lo spinner
          this.prodottiServ.getNewArrivals().subscribe((res) => {
          this.products = res; 
          this.spinner.hide(); // Nasconde lo spinner
          this.loading = false;   
         });
       } else if (params['filter'] === 'best_sellers') {
          this.loading = true;
          this.spinner.show(); // Mostra lo spinner
          this.prodottiServ.getBestSellers().subscribe((res) => {this.products = res;
          this.spinner.hide(); // Nasconde lo spinner
          this.loading = false;
         }
         );
       } else if (params['category']) {
         this.loading = true;
         this.spinner.show(); // Mostra lo spinner
         this.prodottiServ.getProductsByCategory(params['category']).subscribe((res) => {this.products = res;
          this.spinner.hide(); // Nasconde lo spinner
          this.loading = false;
         }
         );
       }else if(params['color']){
        this.loading = true;
        this.spinner.show(); // Mostra lo spinner
        this.prodottiServ.getProductsByColor(params['color']).subscribe((res) => {this.products = res;
          this.spinner.hide(); // Nasconde lo spinner
          this.loading = false;
        })

       }else if(params['categoria']){
        this.loading = true;
        this.spinner.show(); // Mostra lo spinner
        this.prodottiServ.getProductsByCategory(params['categoria']).subscribe((res) => {this.products = res;
          this.spinner.hide(); // Nasconde lo spinner
           this.loading = false;
        })

       }else if(params['price']){
        this.loading = true;
        this.spinner.show(); // Mostra lo spinner
        this.prodottiServ.getProductsByPrice(params['price']).subscribe((res)=>{ this.products = res;
          this.spinner.hide(); // Nasconde lo spinner
          this.loading = false;
        })
       }
       else {
        this.products = [];
        this.currentIndex = 0;

        this.loading = true;
        this.spinner.show(); // Mostra lo spinner
    
        this.loadMoreProducts(); // Carica i prodotti iniziali
        
        this.spinner.hide(); // Nasconde lo spinner
        this.loading = false;

       }
    });
  }



  loadMoreProducts(): void {
    if (!this.loadInfinite || this.loadProd) {
      return;
    }

    this.loadProd = true;

    this.prodottiServ.getProducts(this.currentIndex, this.pageSize).subscribe(newProducts => {
      if (newProducts.length === 0) {
        this.loadInfinite = false; // Disattiva il caricamento se non ci sono più prodotti
      } else {
        this.products = [...this.products, ...newProducts];
        this.currentIndex += this.pageSize; // Aggiorna l'indice corrente
      }
      
      this.loadProd = false;
      console.log('Products:', this.products);
    }, error => {
      console.error('Error loading products:', error);
      this.loadProd = false;
    });
  }

  onScroll(): void {
    const container = document.getElementById('scroll-container');
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if(this.router.url === '/products'){
        if (scrollTop + clientHeight >= scrollHeight - 10 && !this.loadProd) {
          this.loadMoreProducts();
          console.log('Scorri per caricare più prodotti');
        }
      }
    }
  }







}
