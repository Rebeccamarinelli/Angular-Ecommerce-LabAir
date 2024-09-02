import { Component, ElementRef, ViewChild } from '@angular/core';
import { sport } from '../../data/data';
import { ICardsHome } from '../../models/models';

@Component({
  selector: 'app-slider-sport',
  templateUrl: './slider-sport.component.html',
  styleUrl: './slider-sport.component.scss'
})
export class SliderSportComponent {

  isDisabledPrevSport:boolean;
  isDisabledNextSport:boolean;

  sportImages:ICardsHome[] = sport;
  

  @ViewChild('cardListSport') cardSport:ElementRef<HTMLDivElement>;
  @ViewChild('cardSport') card:ElementRef<HTMLDivElement>;
  @ViewChild('btnPrevSport') btnPrevSport:ElementRef<HTMLButtonElement>;
  @ViewChild('btnNextSport') btnNextSport:ElementRef<HTMLButtonElement>;

  controlsBtnSport(btn:PointerEvent): void{
    const cardW = this.card.nativeElement.clientWidth;
    const direction = (btn.target as HTMLElement).id === "prev" ? -1 : 1;
    const scrollAmount = cardW * direction;
    this.cardSport.nativeElement.scrollBy({ left:scrollAmount, behavior:'smooth'});
  }

  handleSlideBtnSport(): void{
    
    const maxScrollLeft = this.cardSport.nativeElement.scrollWidth - this.cardSport.nativeElement.clientWidth;
    
     if(this.cardSport.nativeElement.scrollLeft <=0){
         this.btnPrevSport.nativeElement.classList.add('invisibile');
         this.isDisabledPrevSport = true;
     }else{
          this.btnPrevSport.nativeElement.classList.remove('invisibile');
          this.isDisabledPrevSport = false;
     }

     if(this.cardSport.nativeElement.scrollLeft >= maxScrollLeft){
         this.btnNextSport.nativeElement.classList.add('invisibile');
         this.isDisabledNextSport = true;
     }else{
          this.btnNextSport.nativeElement.classList.remove('invisibile');
          this.isDisabledNextSport = false;
     }
 }



}
