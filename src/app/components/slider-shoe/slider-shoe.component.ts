import { Component, Input, ViewChild, ElementRef} from '@angular/core';
import { singleShoe } from '../../models/models';

@Component({
  selector: 'app-slider-shoe',
  templateUrl: './slider-shoe.component.html',
  styleUrl: './slider-shoe.component.scss'
})
export class SliderShoeComponent {

  isDisabledPrev:boolean ;
  isDisabledNext:boolean;

  @Input() shoesCard:singleShoe[];

  @ViewChild('cardlist') cardList: ElementRef;
  @ViewChild('card') card: ElementRef;
  @ViewChild('btnPrev') btnPrev: ElementRef;
  @ViewChild('btnNext') btnNext: ElementRef;

  controlsBtn(btn:any){
    const cardW = this.card.nativeElement.clientWidth;
    const direction = btn.target.id === "prev" ? -1 : 1;
    const scrollAmount = cardW * direction;
    this.cardList.nativeElement.scrollBy({ left:scrollAmount, behavior:'smooth'});
  }


  
  handleSlideBtn(){
    const maxScrollLeft = this.cardList.nativeElement.scrollWidth - this.cardList.nativeElement.clientWidth;
    
     if(this.cardList.nativeElement.scrollLeft <=0){
         this.btnPrev.nativeElement.classList.add('invisibile');
         this.isDisabledPrev = true;
        
     }else{
          this.btnPrev.nativeElement.classList.remove('invisibile');
          this.isDisabledPrev = false;     
     }

     if(this.cardList.nativeElement.scrollLeft >= maxScrollLeft){
         this.btnNext.nativeElement.classList.add('invisibile');
         this.isDisabledNext = true;
     }else{
          this.btnNext.nativeElement.classList.remove('invisibile');
          this.isDisabledNext = false;
     }
 }
  


}
