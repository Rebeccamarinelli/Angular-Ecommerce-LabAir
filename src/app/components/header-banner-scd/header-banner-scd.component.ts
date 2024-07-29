import { Component, ElementRef, ViewChild, EventEmitter, Output, HostListener } from '@angular/core';

@Component({
  selector: 'app-header-banner-scd',
  templateUrl: './header-banner-scd.component.html',
  styleUrl: './header-banner-scd.component.scss'
})
export class HeaderBannerScdComponent {

  @Output() mandaBanner = new EventEmitter<ElementRef<HTMLDivElement>>
  @ViewChild('banner') bannerHeader!: ElementRef<HTMLDivElement>;
  showElement: boolean = true;

  ngAfterViewInit(){
    this.mandaBanner.emit(this.bannerHeader)
  }

 

}
