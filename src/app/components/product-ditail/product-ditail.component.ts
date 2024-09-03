import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';
import { IProdotti } from '../../models/models';
import { CartService } from '../../services/cart.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-ditail',
  templateUrl: './product-ditail.component.html',
  styleUrl: './product-ditail.component.scss'
})
export class ProductDitailComponent {

  singleProduct: IProdotti;
  productList = [];
  @ViewChild('errorMessage') errorMessage:ElementRef<HTMLParagraphElement>
  @ViewChild('errorMessageC') errorMessageC:ElementRef<HTMLParagraphElement>
  @ViewChild('box') box:ElementRef<HTMLDivElement>
  @ViewChild('popUp') popUp:ElementRef<HTMLDivElement>
  displayedImg = 0
  selectedIndex?:number;
  selectedIndexTaglia?:number;
  totalItemNumber:number;
  loading = false; // Variabile per controllare lo stato dello spinner
  
  constructor(private activateRoute: ActivatedRoute, private serviceProduct: ProdottiService, private cartService: CartService, private spinner:NgxSpinnerService, private route:Router){
    
    this.cartService.getProducts().subscribe((res)=>{
      this.productList = res;
      this.totalItemNumber = this.productList.reduce((sum, item) => sum + item.quantity, 0); 
    })


    this.activateRoute.params.subscribe((params)=>{
      this.loading = true; // Mostra lo spinner
      this.spinner.show(); // Per ngx-spinner
      this.serviceProduct.getProdById(params.id).subscribe((res)=>{
        this.singleProduct = res;
        setTimeout(()=>{
          this.loading = true; // Mostra lo spinner
          this.spinner.hide(); // Per ngx-spinner
        },200)
        
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



  isSelectedTaglia:boolean = false;
  isSelectedColor:boolean = false;
  errorBox:boolean = false;


  mustSelect(isSelectedTaglia:boolean, isSelectedColor:boolean, product:IProdotti){
   if(isSelectedColor  && isSelectedTaglia){
    console.log(this.isSelectedColor, this.isSelectedTaglia, '1')
     // this.errorBox = false
     // this.box.nativeElement.classList.remove('error-box')
      this.errorMessage.nativeElement.classList.remove('error')
      this.errorMessageC.nativeElement.classList.remove('error')
      this.addToCart(product)
      this.isSelectedColor = !this.isSelectedColor
      this.isSelectedTaglia = !this.isSelectedTaglia
     // this.errorBox = !this.errorBox

   }else if(isSelectedColor === true && isSelectedTaglia === false){
    console.log(this.isSelectedColor, this.isSelectedTaglia, '2')
      this.errorBox = true;
    //  this.box.nativeElement.classList.add('error-box')
      this.errorMessage.nativeElement.classList.remove('error')
      this.errorMessageC.nativeElement.classList.add('error')

   }else if(isSelectedTaglia === true && isSelectedColor === false){
      this.errorBox = true;
     console.log(this.isSelectedColor, this.isSelectedTaglia, '3')
     // this.box.nativeElement.classList.add('error-box')
      this.errorMessage.nativeElement.classList.add('error')
      this.errorMessageC.nativeElement.classList.remove('error')
   }
   else{
    console.log(this.isSelectedColor, this.isSelectedTaglia, '4')
      this.errorBox = true;
     // this.box.nativeElement.classList.add('error-box')
      this.errorMessage.nativeElement.classList.add('error')
      this.errorMessageC.nativeElement.classList.add('error')
   }
  }



 addToCart(product:IProdotti): void{
  console.log('go')
  this.cartService.addToCart(product)
  this.popUp.nativeElement.style.display='block'
  this.route.events.subscribe((event)=>{
    if(event instanceof NavigationEnd && (event.url === '/cart' || event.url === '/auth')){
      this.popUp.nativeElement.style.display='none'
      this.enableBodyScroll()
      this.selectedIndex = null;
      this.selectedIndexTaglia = null;
    }
  })
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
  //this.box.nativeElement.classList.remove('error-box')
  this.errorMessageC.nativeElement.classList.remove('error')
  this.isSelectedColor = true;
  if(this.isSelectedColor && this.isSelectedTaglia){
    this.errorBox = false;
  }
  //this.errorBox = false;
  console.log(this.isSelectedColor, this.isSelectedTaglia)
 // console.log(this.isSelectedColor)
  }

  innerImg(img:string){
  this.image = img
  this.singleProduct.immagineSelezionata = img
 // console.log(this.isSelectedColor)
 }

 innerT(taglia:string){
  this.taglia = taglia
  this.singleProduct.tagliaSelezionata = taglia
  //this.box.nativeElement.classList.remove('error-box')
  this.errorMessage.nativeElement.classList.remove('error')
  this.isSelectedTaglia = true;
  if(this.isSelectedColor && this.isSelectedTaglia){
    this.errorBox = false;
  }
  console.log(this.isSelectedColor, this.isSelectedTaglia)
 // console.log(this.isSelectedTaglia)
 }

 closePopUp(){
   this.popUp.nativeElement.style.display='none';
   this.selectedIndex = null;
   this.selectedIndexTaglia = null;
   this.enableBodyScroll()
 }

 
  
 }



