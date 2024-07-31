import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.scss'
})
export class CardProductComponent {

  @Input() products: [];

  getlenght(array:[]){
    return array.length
  }
  

}
