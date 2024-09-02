import { Component, Input, EventEmitter, Output} from '@angular/core';
import { colors } from '../../data/data';
import { ProdottiService } from '../../services/prodotti.service';
import { FormControl } from '@angular/forms';
import { IColor, IProdotti } from '../../models/models';
import { map } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sidebar-product-menu',
  templateUrl: './sidebar-product-menu.component.html',
  styleUrl: './sidebar-product-menu.component.scss'
})
export class SidebarProductMenuComponent {
@Input() products:IProdotti[];
colors:IColor[] = colors
filteredList:IProdotti[]


@Output() passFilter: EventEmitter<any> = new EventEmitter


filtro:FormControl = new FormControl

constructor( 
  private prodottiService: ProdottiService, 
  private router:Router){

  this.filtro.valueChanges.pipe(
    map((valore:string)=> valore.toLocaleLowerCase())
  )
  .subscribe((value:string)=>{
    this.prodottiService.getAllProducts().subscribe((res)=>{
      this.products = res;
      this.filteredList = this.products.filter(product => product.nome.toLowerCase().includes(value) || product.descrizione.toLowerCase().includes(value))
      if (value.trim() === '' ) {
        // Se l'input è vuoto, carica tutti i prodotti
        this.filteredList = this.products;
        this.router.navigate(['products'])
      } else {
        // Altrimenti applica il filtro
        this.filteredList = this.products.filter(product => 
        product.nome.toLowerCase().includes(value) || 
        product.descrizione.toLowerCase().includes(value)
        );
      }
  
    })
     
   
  })
}


filterColor(color:string):void {
  this.router.navigate(['/products'], { queryParams: { color: color } });
}

filterCat(categoria:string):void {
  this.router.navigate(['/products'], { queryParams: { categoria: categoria } });
}

filterPrice(price:string):void {
  this.router.navigate(['/products'], { queryParams: { price: price } });
}

 passArray():void{
   this.passFilter.emit(this.filteredList)
 }




}
