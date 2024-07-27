import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider-sport',
  templateUrl: './slider-sport.component.html',
  styleUrl: './slider-sport.component.scss'
})
export class SliderSportComponent {

  isDisabledPrevSport:boolean;
  isDisabledNextSport:boolean;

  @Input() sportImages:any;

  @ViewChild('cardListSport') cardSport:ElementRef;
  @ViewChild('cardSport') card:ElementRef;
  @ViewChild('btnPrevSport') btnPrevSport:ElementRef;
  @ViewChild('btnNextSport') btnNextSport:ElementRef;

  controlsBtnSport(btn:any){
    const cardW = this.card.nativeElement.clientWidth;
    const direction = btn.target.id === "prev" ? -1 : 1;
    const scrollAmount = cardW * direction;
    this.cardSport.nativeElement.scrollBy({ left:scrollAmount, behavior:'smooth'});
  }

  handleSlideBtnSport(){
    
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
