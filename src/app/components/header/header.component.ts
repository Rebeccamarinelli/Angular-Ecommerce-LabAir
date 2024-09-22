import { Component, ElementRef, HostListener} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { filter } from 'rxjs';
import { NavigationEnd } from '@angular/router';
import { IProdotti } from '../../models/models';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

 constructor(
  private router:Router,
  private cartService: CartService){

    window.addEventListener('resize', () => this.onResize());
  }

  private lastScroll: number = 0;
  private body: HTMLElement;
  bannerElement!: ElementRef<HTMLDivElement>;
  totalItem:number;
  listItem:IProdotti[] = [] 

  hideComponents:boolean = true;
  
  riceviBanner(elementRef: ElementRef<HTMLDivElement>):void{
    this.bannerElement = elementRef;
  }

  ngOnInit(): void {
    this.body = document.body;
    this.cartService.getProducts().subscribe((res:IProdotti[]) => {
        //logica che gestisce i prodotti inseriti nel carrello e tramite reduce permette di sommare il numero (comprese qty) dei prodotti nel carrello
        this.listItem = res
        this.totalItem = this.listItem.reduce((sum:number, item:IProdotti) => sum + item.quantity, 0); 
    })
 
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {

        // Aggiungo le rotte in cui voglio nascondere i componenti
        const routesToShow:string[] = ['/home'];
  
        // Se la route corrente è inclusa in routesToHide, nascondo i componenti
        this.hideComponents = !routesToShow.includes(event.urlAfterRedirects);
      });
   
 }

 ngOnDestroy() {
  // Rimuovi l'evento di resize quando il componente è distrutto
  window.removeEventListener('resize', () => this.onResize());
}

  @HostListener('window:scroll', []) onWindowScroll(): void {
    const currentScroll = window.scrollY || document.documentElement.scrollTop || 0;

    if (currentScroll <= 0) {
      this.body.classList.remove('scroll-up');
      this.body.classList.remove('scroll-down');
      this.bannerElement.nativeElement.style.display='block'
    } 
    else if (currentScroll > this.lastScroll) {
      // Scroll down
      if (!this.body.classList.contains('scroll-down')) {
        this.body.classList.remove('scroll-up');
        this.body.classList.add('scroll-down');
        if(currentScroll >= 3){
          this.bannerElement.nativeElement.style.display='none'
        }
      }
    } 
    else if (currentScroll < this.lastScroll) {
      // Scroll up
      if (!this.body.classList.contains('scroll-up')) {
        this.body.classList.remove('scroll-down');
        this.body.classList.add('scroll-up');
         this.bannerElement.nativeElement.style.display='none'
      }
    }

    this.lastScroll = currentScroll;
  }

 
  //da spostare in un file di dati condiviso poiche si può riutilizzare nel side-product
  categories: string[] = ['Basket', 'Running', 'Training', 'Sneakers', 'Trail Running'];
  isOpen:boolean = false;

  filterNewArrivals() {
    this.router.navigate(['/products'], { queryParams: { filter: 'nuovo_arrivi' } }); 
    this.selectingMenu()
    this.isOpen = !this.isOpen;
                                            // ?filter = nuovo_arrivi
  }

  filterBestSellers() {
    this.router.navigate(['/products'], { queryParams: { filter: 'best_sellers' } });
    this.selectingMenu()
    this.isOpen = !this.isOpen;
  }

  filterByCategory(category: string) {
    this.router.navigate(['/products'], { queryParams: { category } });
    this.selectingMenu() 
    this.isOpen = !this.isOpen;
  }

 selectingMenu():void{
  const menu = document.querySelector('.menu-mobile');
  const over = document.querySelector('.overlay');
  menu.classList.remove('menu-mobile-visibile')
  over.classList.remove('opacity-overlay')
  document.body.style.overflow = 'auto';
  document.querySelector('.first-span').classList.remove('closing')
  document.querySelector('.mid').classList.remove('close-scd')
  document.querySelector('.last').classList.remove('close-th')
 }

  isVisibleMenu(): void{
    this.isOpen = !this.isOpen;
    const menu = document.querySelector('.menu-mobile');
    const over = document.querySelector('.overlay');
    menu.classList.toggle('menu-mobile-visibile');
    over.classList.toggle('opacity-overlay')
    this.body.classList.toggle('hiddenBody')
    document.querySelector('.first-span').classList.toggle('closing')
    document.querySelector('.mid').classList.toggle('close-scd')
    document.querySelector('.last').classList.toggle('close-th')
    
   
    if(this.isOpen){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'auto';
    }

    
    console.log(this.isOpen)
    
  }


  onResize(): void {
    
    if (window.innerWidth > 1000) {
      
      document.body.style.overflow = 'auto';
      this.isOpen = false;
      const menu = document.querySelector('.menu-mobile');
      const over = document.querySelector('.overlay');
      menu.classList.remove('menu-mobile-visibile');
      over.classList.remove('opacity-overlay')
      document.querySelector('.first-span').classList.remove('closing')
      document.querySelector('.mid').classList.remove('close-scd')
      document.querySelector('.last').classList.remove('close-th')
    }
  }

  overlayOn(){
    const overlay = document.querySelector('.overlay-bg');
    overlay.classList.add('visibility');
    document.body.style.overflow = 'hidden';
  }

  overlayOff(){
    const overlay = document.querySelector('.overlay-bg');
    overlay.classList.remove('visibility')
    document.body.style.overflow = 'auto';
  }

}
