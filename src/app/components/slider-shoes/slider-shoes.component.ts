import { Component } from '@angular/core';

@Component({
  selector: 'app-slider-shoes',
  templateUrl: './slider-shoes.component.html',
  styleUrl: './slider-shoes.component.scss'
})
export class SliderShoesComponent {

 isDisabledPrev:boolean;
 isDisabledNext:boolean;

  consolMe(btn:any){
    const cardList = document.querySelector('.card-list')
    const card = document.querySelector('.card')
    const cardW = card.clientWidth+18;
    const direction = btn.target.id === "prev" ? -1 : 1;
    const scrollAmount = cardW * direction;
    cardList.scrollBy({ left:scrollAmount, behavior:'smooth'})
  }


   handleSlideBtn(){
     const cardList = document.querySelector('.card-list')
     const btns = document.querySelectorAll('.btn')
     const maxScrollLeft = cardList.scrollWidth - cardList.clientWidth
     console.log(maxScrollLeft)
     for (let i = 0; i < btns.length; i++) {
      if(cardList.scrollLeft <=0){
          btns[0].classList.add('invisibile')
          this.isDisabledPrev = true;
      }else{
           btns[0].classList.remove('invisibile')
           this.isDisabledPrev = false;
      }

      if(cardList.scrollLeft >= maxScrollLeft){
          btns[1].classList.add('invisibile')
          this.isDisabledNext = true;
      }else{
           btns[1].classList.remove('invisibile')
           this.isDisabledNext = false;
      }
  }
   }
}
