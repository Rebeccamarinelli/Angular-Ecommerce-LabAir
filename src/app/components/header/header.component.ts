import { Component, ElementRef, HostListener} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdottiService } from '../../services/prodotti.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // filter: FormControl = new FormControl()
  

 constructor(private router:Router, private prodottiServ: ProdottiService){}

  private lastScroll: number = 0;
  private body: HTMLElement;
  bannerElement!: ElementRef<HTMLDivElement>;

  
  riceviBanner(elementRef: ElementRef<HTMLDivElement>){
    this.bannerElement = elementRef;
  }

  ngOnInit(): void {
    this.body = document.body;
    // this.filter.valueChanges.subscribe(value => {
    //   this.prodottiServ.setSearchTerm(value);
    // });
   
 }

  @HostListener('window:scroll', []) onWindowScroll(): void {

    const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;

    if (currentScroll <= 0) {
      this.body.classList.remove('scroll-up');
      this.body.classList.remove('scroll-down');
      this.bannerElement.nativeElement.style.display='block'
    } 
    else if (currentScroll > this.lastScroll) {
      // Scrolling down
      if (!this.body.classList.contains('scroll-down')) {
        this.body.classList.remove('scroll-up');
        this.body.classList.add('scroll-down');
        if(currentScroll >= 3){
          this.bannerElement.nativeElement.style.display='none'
        }
      }
    } 
    else if (currentScroll < this.lastScroll) {
      // Scrolling up
      if (!this.body.classList.contains('scroll-up')) {
        this.body.classList.remove('scroll-down');
        this.body.classList.add('scroll-up');
         this.bannerElement.nativeElement.style.display='none'
      }
    }

    this.lastScroll = currentScroll;
  }

 

  categories: string[] = ['Basket', 'Running', 'Training', 'Sneakers', 'Trail Running'];


  filterNewArrivals() {
    this.router.navigate(['/products'], { queryParams: { filter: 'nuovo_arrivi' } }); 
                                            // ?filter = nuovo_arrivi
  }

  filterBestSellers() {
    this.router.navigate(['/products'], { queryParams: { filter: 'best_sellers' } });
  }

  filterByCategory(category: string) {
    this.router.navigate(['/products'], { queryParams: { category } });
  }







}
