import { Component, Input, EventEmitter, Output} from '@angular/core';
import { colors } from '../../data/data';
import { ProdottiService } from '../../services/prodotti.service';
import { FormControl } from '@angular/forms';
import { IProdotti } from '../../models/models';
import { map } from 'rxjs';



@Component({
  selector: 'app-sidebar-product-menu',
  templateUrl: './sidebar-product-menu.component.html',
  styleUrl: './sidebar-product-menu.component.scss'
})
export class SidebarProductMenuComponent {
@Input() products:IProdotti[];
colors:any = colors
filteredList:IProdotti[]

@Output() passFilter: EventEmitter<any> = new EventEmitter

constructor( private prodottiService: ProdottiService){

  this.filtro.valueChanges.pipe(
    map((valore:string)=> valore.toLocaleLowerCase())
  )
  .subscribe((value)=>{
    this.prodottiService.getAllProducts().subscribe((res)=>{
      this.products = res;
      this.filteredList = this.products.filter(product => product.nome.toLowerCase().includes(value) || product.descrizione.toLowerCase().includes(value))
      console.log(this.filteredList)
    })
     
    
   
  })
}


getFilteredByCat(categoria:string){
  this.prodottiService.getAllProducts().subscribe(res =>{
    this.products = res
    window.scrollTo(0, 0);
  })
  this.filteredList = this.products.filter(scarpa => scarpa.categoria === categoria);
}

getFilteredByPrice(filterType:string){
  this.prodottiService.getAllProducts().subscribe(res =>{
    this.products = res
    window.scrollTo(0, 0);
  })

  switch (filterType) {
    case '50':
      return this.filteredList = this.products.filter(product => product.prezzo < 50);
    case '50-100':
      return this.filteredList = this.products.filter(product => product.prezzo >= 50 && product.prezzo < 100);
    case '100-150':
      return this.filteredList = this.products.filter(product => product.prezzo >= 100 && product.prezzo <= 150);
    case '150':
      return this.filteredList = this.products.filter(product => product.prezzo > 150);
    default:
      return this.filteredList;
  }

}

getFilterByColor(color:string){
  this.prodottiService.getAllProducts().subscribe(res =>{
    this.products = res
    window.scrollTo(0, 0);
  })
  this.filteredList = this.products.filter((product)=>{
   return product.colori_disponibili.includes(color)
  });
}

passArray(){
  this.passFilter.emit(this.filteredList)
}


filtro:FormControl = new FormControl


}
