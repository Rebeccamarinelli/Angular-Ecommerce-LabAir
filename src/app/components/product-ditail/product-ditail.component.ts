import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { IProdotti } from '../../models/models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-ditail',
  templateUrl: './product-ditail.component.html',
  styleUrl: './product-ditail.component.scss'
})
export class ProductDitailComponent {

  singleProduct: IProdotti;
  productList = [];
  @ViewChild('errorMessage') errorMessage:ElementRef<HTMLParagraphElement>
  @ViewChild('popUp') popUp:ElementRef<HTMLDivElement>
  displayedImg = 0
  selectedIndex?:number;
  selectedIndexTaglia?:number;
  totalItemNumber:number;

  
  constructor(private activateRoute: ActivatedRoute, private serviceProduct: ProdottiService, private cartService: CartService){

    this.cartService.getProducts().subscribe((res)=>{
      this.productList = res;
      this.totalItemNumber = this.productList.reduce((sum, item) => sum + item.quantity, 0); 
    })


    this.activateRoute.params.subscribe((params)=>{
      this.serviceProduct.getProdById(params.id).subscribe((res)=>{
        this.singleProduct = res;
        this.singleProduct = {
          ...this.singleProduct,
          coloreSelezionato: this.color,
          tagliaSelezionata: this.taglia,
          immagineSelezionata: this.image,
          quantity: 1
        };
      })

    })
  }

  ngOnInit(){
    this.serviceProduct.getAllProducts().subscribe((res:any[]) =>{ 
     this.productList = res;
     
    })
  }
 
  selectItem(index: number): void {
    this.selectedIndex = index; // Aggiorna l'indice dell'elemento selezionato
  }

  
  selectItemTaglia(index: number): void {
    this.selectedIndexTaglia = index; // Aggiorna l'indice dell'elemento selezionato
  }

  selectItemImage(index: number): void {
    this.displayedImg = index; // Aggiorna l'indice dell'elemento selezionato
  }






  mustSelect(isSelected:boolean){
   if(isSelected){
     this.errorMessage.nativeElement.style.display = 'none'
     //this.errorMessageC.nativeElement.style.display = 'none'
   }else{
     this.errorMessage.nativeElement.classList.add('error')
    // this.errorMessageC.nativeElement.classList.add('error')
   }
  }



 addToCart(product:IProdotti): void{
  this.cartService.addToCart(product)
  this.popUp.nativeElement.style.display='block'
  this.disableBodyScroll()
  setTimeout(()=>{
    this.popUp.nativeElement.style.display='none'
    this.enableBodyScroll()
    this.selectedIndex = null;
    this.selectedIndexTaglia = null;
  }, 3000)
 }

 disableBodyScroll() {
  document.body.style.overflow = 'hidden';
}

enableBodyScroll() {
  document.body.style.overflow = 'auto'; 
}


  image:string;
  color:string;
  taglia:string;
  

  innerColor(colore:string){
  this.color = colore
  this.singleProduct.coloreSelezionato = colore
  }

  innerImg(img:string){
  this.image = img
  this.singleProduct.immagineSelezionata = img
 }

 innerT(taglia:string){
 this.taglia = taglia
 this.singleProduct.tagliaSelezionata = taglia
 console.log(this.singleProduct)
 }

 
  
 }



