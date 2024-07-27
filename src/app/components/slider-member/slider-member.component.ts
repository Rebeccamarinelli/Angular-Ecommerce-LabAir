import { Component, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-slider-member',
  templateUrl: './slider-member.component.html',
  styleUrl: './slider-member.component.scss'
})
export class SliderMemberComponent {

isDisabledPrevMember:boolean;
isDisabledNextMember:boolean; 

@Input() memberImages:any;

@ViewChild('cardListMember') cardListMember:ElementRef;
@ViewChild('cardMember') cardMember:ElementRef;
@ViewChild('btnPrevMember') btnPrevMember:ElementRef;
@ViewChild('btnNextMember') btnNextMember:ElementRef;


  controlsBtnMember(btn:any){
    const cardW = this.cardMember.nativeElement.clientWidth;
    const direction = btn.target.id === "prev" ? -1 : 1;
    const scrollAmount = cardW * direction;
    this.cardListMember.nativeElement.scrollBy({ left:scrollAmount, behavior:'smooth'});
  }

  handleSlideBtnMember(){
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
