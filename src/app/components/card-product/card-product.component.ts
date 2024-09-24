import { Component, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { IProdotti } from '../../models/models';
import { SpinnerService } from '../../services/spinner.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {

  @Output() goIntoDitails: EventEmitter<number> = new EventEmitter
 
  products: IProdotti[] = [];
  loadedProducts: IProdotti[] = []; // Prodotti effettivamente caricati, da usare per il reset


  currentIndex: number = 0;
  pageSize: number = 20;
  loadInfinite: boolean = true;
  totalProducts:number=0;
  loadProd:boolean= false

  loading:boolean = false; // Variabile per controllare lo stato dello spinner

  constructor(
    private activetedRouter: ActivatedRoute, 
    private prodottiServ: ProdottiService, 
    private spinner: SpinnerService, 
    private router:Router){}

  getlenght(array:string[]):number{
    return array.length
  }

  onImageClick(id:number):void{
      this.goIntoDitails.emit(id)
    }
  
   

  riceviFilteredList(data: { filteredList: IProdotti[], searchValue: string }): void{
   // console.log(data)
    if (data.filteredList && data.filteredList.length === 50 && data.searchValue === '') {
        this.prodottiServ.getAllProducts().subscribe((res) => {
         this.products = res;
        });
    } else {
      this.products = data.filteredList
    }
   
  }

  ngOnInit() :void {
   
    this.activetedRouter.queryParams.subscribe(params => {

      
       if (params['filter'] === 'nuovo_arrivi') {
          this.spinner.showSpinner()
          this.prodottiServ.getNewArrivals().subscribe((res) => {
          this.products = res; 
          this.spinner.hideSpinner()
         });
       } else if (params['filter'] === 'best_sellers') {
          this.spinner.showSpinner()
          this.prodottiServ.getBestSellers().subscribe((res) => {
          this.products = res;
          this.spinner.hideSpinner()
         }
         );
       } else if (params['category']) {
          this.spinner.showSpinner()
          this.prodottiServ.getProductsByCategory(params['category']).subscribe((res) => {
          this.products = res;
          this.spinner.hideSpinner()
         }
         );
       }else if(params['color']){
          this.spinner.showSpinner()
          this.prodottiServ.getProductsByColor(params['color']).subscribe((res) => {this.products = res;
          this.spinner.hideSpinner()
        })

       }else if(params['categoria']){
          this.spinner.showSpinner()
          this.prodottiServ.getProductsByCategory(params['categoria']).subscribe((res) => {this.products = res;
          this.spinner.hideSpinner()
        })

       }else if(params['price']){
          this.spinner.showSpinner()
          this.prodottiServ.getProductsByPrice(params['price']).subscribe((res)=>{ this.products = res;
          this.spinner.hideSpinner()
        })
       }
       else {
          this.products = [];
          this.currentIndex = 0;

          this.loadMoreProducts(); // Carica i prodotti iniziali
      
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
        this.spinner.showSpinner()
        // Evita duplicati controllando se i nuovi prodotti sono già presenti
        const uniqueProducts = newProducts.filter(newProd => 
          !this.products.some(existingProd => existingProd.id === newProd.id)
        );
        this.products = [...this.products, ...uniqueProducts]; // Aggiungi solo i prodotti non duplicati
        this.loadedProducts = this.products; // Sincronizza l'array loadedProducts
        this.currentIndex += this.pageSize; // Aggiorna l'indice corrente
        this.spinner.hideSpinner()
      }
      
      this.loadProd = false;
     // console.log('Prodotti caricati:', this.products);
    }
    );
  }

  onScroll(): void {
    const container = document.getElementById('scroll-container');
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if(this.router.url === '/products'){
        if (scrollTop + clientHeight >= scrollHeight - 10 && !this.loadProd) {
          this.loadMoreProducts();
        }
      }
    }
  }


}
