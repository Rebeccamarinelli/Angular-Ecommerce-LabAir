import { Component, Input, EventEmitter, Output} from '@angular/core';
import { colors } from '../../data/data';
import { ProdottiService } from '../../services/prodotti.service';
import { FormControl } from '@angular/forms';
import { IColor, IProdotti } from '../../models/models';
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


@Output() passFilter: EventEmitter<any> = new EventEmitter<any>()
@Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

filtro:FormControl = new FormControl

constructor( 
  private prodottiService: ProdottiService, 
  private router:Router){

    this.filtro.valueChanges.subscribe((value)=>{
      this.getProd()
      console.log(value)
      if(value.trim()=== ''){
        this.router.navigate(['products'])
        this.passArray()
      }else{
        this.filteredList = this.products.filter(product => product.nome.toLowerCase().includes(value) || product.descrizione.toLowerCase().includes(value))
      }
    })
    this.passArray()
}

getProd(){
  this.prodottiService.getAllProducts().subscribe((res)=>{
    this.products = res;
    this.filteredList = res;
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
  const searchValue = this.filtro.value;
  this.passFilter.emit({
    filteredList: this.filteredList,
    searchValue: searchValue
  });
  this.filterChanged.emit(searchValue);
}
 }





