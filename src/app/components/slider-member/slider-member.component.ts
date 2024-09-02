import { Component, ViewChild, ElementRef } from '@angular/core';
import { membership } from '../../data/data';
import { ICardsHome } from '../../models/models';

@Component({
  selector: 'app-slider-member',
  templateUrl: './slider-member.component.html',
  styleUrl: './slider-member.component.scss'
})
export class SliderMemberComponent {

isDisabledPrevMember:boolean;
isDisabledNextMember:boolean; 

memberImages:ICardsHome[] = membership

@ViewChild('cardListMember') cardListMember:ElementRef<HTMLDivElement>;
@ViewChild('cardMember') cardMember:ElementRef<HTMLDivElement>;
@ViewChild('btnPrevMember') btnPrevMember:ElementRef<HTMLButtonElement>;
@ViewChild('btnNextMember') btnNextMember:ElementRef<HTMLButtonElement>;


  controlsBtnMember(btn:PointerEvent): void{
    const cardW = this.cardMember.nativeElement.clientWidth;
    const direction = (btn.target as HTMLElement).id === "prev" ? -1 : 1;
    const scrollAmount = cardW * direction;
    this.cardListMember.nativeElement.scrollBy({ left:scrollAmount, behavior:'smooth'});
  }

  handleSlideBtnMember():void{
    const maxScrollLeft = this.cardListMember.nativeElement.scrollWidth - this.cardListMember.nativeElement.clientWidth;
  
     if(this.cardListMember.nativeElement.scrollLeft <=0){
         this.btnPrevMember.nativeElement.classList.add('invisibile');
         this.isDisabledPrevMember = true;
     }else{
          this.btnPrevMember.nativeElement.classList.remove('invisibile');
          this.isDisabledPrevMember = false;
     }

     if(this.cardListMember.nativeElement.scrollLeft >= maxScrollLeft){
         this.btnNextMember.nativeElement.classList.add('invisibile');
         this.isDisabledNextMember = true;
     }else{
          this.btnNextMember.nativeElement.classList.remove('invisibile');
          this.isDisabledNextMember = false;
     }
 }
  

}
