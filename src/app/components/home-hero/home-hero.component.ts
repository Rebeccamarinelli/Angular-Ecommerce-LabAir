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

    // Esegui l'animazione solo se non è già stata eseguita
    if (!animationPlayed) {
      // Blocca lo scroll
      document.body.style.overflow = 'hidden';

      // Applica l'animazione GSAP sull'immagine della hero
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

          // Salva lo stato dell'animazione in localStorage
          sessionStorage.setItem('heroAnimationPlayed', 'true');
        }
      });
    } else {
      // Sblocca lo scroll immediatamente se l'animazione è già stata eseguita
      document.body.style.overflow = 'auto';
    }
  }


}
