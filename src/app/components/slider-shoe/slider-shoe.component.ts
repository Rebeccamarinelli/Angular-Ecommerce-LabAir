import { Component, ViewChild, ElementRef} from '@angular/core';
import { singleShoe } from '../../models/models';
import { shoes } from '../../data/data';

@Component({
  selector: 'app-slider-shoe',
  templateUrl: './slider-shoe.component.html',
  styleUrl: './slider-shoe.component.scss'
})
export class SliderShoeComponent {

  isDisabledPrev:boolean ;
  isDisabledNext:boolean;

  shoesCard:singleShoe[] = shoes;

  @ViewChild('cardlist') cardList: ElementRef<HTMLDivElement>;
  @ViewChild('card') card: ElementRef<HTMLDivElement>;
  @ViewChild('btnPrev') btnPrev: ElementRef<HTMLButtonElement>;
  @ViewChild('btnNext') btnNext: ElementRef<HTMLButtonElement>;

  controlsBtn(btn:PointerEvent): void{
    const cardW = this.card.nativeElement.clientWidth;
    const direction = (btn.target as HTMLElement).id === "prev" ? -1 : 1;
    const scrollAmount = cardW * direction;
    this.cardList.nativeElement.scrollBy({ left:scrollAmount, behavior:'smooth'});
  }

  handleSlideBtn(): void{
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
