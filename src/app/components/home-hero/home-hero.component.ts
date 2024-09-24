import { Component } from '@angular/core';
import { gsap } from 'gsap';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home-hero',
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.scss'
})
export class HomeHeroComponent {

  @ViewChild('heroImage') heroImage: ElementRef;

  ngAfterViewInit(): void {
    // Controlla se l'animazione è già stata eseguita
    const animationPlayed = sessionStorage.getItem('heroAnimationPlayed');

    
    if (!animationPlayed) {
     
      document.body.style.overflow = 'hidden';

      
      gsap.from(this.heroImage.nativeElement, { 
        duration: 2,      // Durata dell'animazione
        opacity: 0,       // Partenza con opacità 0
        y: -25,           // Movimento verticale
        scale: 1.05,      // Zoom leggero
        ease: 'power3.out', // Easing fluido
        delay: 0.5,       // Ritardo di 0.5 secondi
        onComplete: () => {
          // Sblocca lo scroll alla fine dell'animazione
          document.body.style.overflow = 'auto';

         
          sessionStorage.setItem('heroAnimationPlayed', 'true');
        }
      });
    } else {
      document.body.style.overflow = 'auto';
    }
  }


}
