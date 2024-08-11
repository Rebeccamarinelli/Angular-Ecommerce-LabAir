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
  newList = []


  
  constructor(private activateRoute: ActivatedRoute, private serviceProduct: ProdottiService, private cartService: CartService){

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
        // console.log(this.singleProduct)
      })

    })
  }

  ngOnInit(){
    this.serviceProduct.getAllProducts().subscribe((res:any[]) =>{ 
     this.productList = res;

    })
  }
 // isSelectedCol:boolean;
  isSelectedTaglia:boolean;
  @ViewChild('errorMessage') errorMessage:ElementRef<HTMLParagraphElement>
//  @ViewChild('errorMessageC') errorMessageC:ElementRef<HTMLParagraphElement>
  selectedSize: string = '';
  selectedColor: string = '';
  displayedImg = 0
  
  // Funzione per selezionare una taglia
  selectSize(size: string) {
    this.selectedSize = size;
    this.isSelectedTaglia = true
    this.errorMessage.nativeElement.classList.remove('error')
  }

  // Funzione per verificare se una taglia è selezionata
  isSelectedSize(size: string): boolean {
    return this.selectedSize === size;
  }



  

  updateProductListImg(img: string) {
    this.productList.forEach(el => {
      el.immUrl = img;
    });
  }

 updateProductListTaglia(taglia: string) {
    this.productList.forEach(el => {
      el.taglia_selezionata = taglia;
    });
  }


  updateProductListColore(colore: string) {
    this.productList.forEach(el => {
      el.colore_selezionato = colore;
    });
  }

  // Funzione per selezionare un colore
  // selectColor(color: string) {
  //   this.selectedColor = color;
  //   this.isSelectedCol = true
  //   this.errorMessageC.nativeElement.classList.remove('error')
  // }



  // Funzione per verificare se un colore è selezionato
  isSelectedColor(color: string): boolean {
    return this.selectedColor === color;
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

  // arrayList(colore:string, img:string, taglia:string){
  //  if(colore && img && taglia != undefined){
  //    this.productList.forEach((element)=>{
  //     element.immUrl= img,
  //     element.taglia_selezionata = taglia,
  //     element.colore_selezionato = colore,
  //     element.prezzo = this.singleProduct.prezzo
  //    })
  //   }
  //  }


 
  
 }



