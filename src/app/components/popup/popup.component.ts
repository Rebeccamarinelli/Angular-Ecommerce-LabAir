import { Component } from '@angular/core';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  title = '';
  message = '';
  isVisible = false;

  constructor(private popupService: PopupService) {
    this.popupService.popupState.subscribe(popup => {
      this.title = popup.title;
      this.message = popup.message;
      this.isVisible = popup.isVisible;
    });
  }

  closePopup() {
    this.isVisible = false;
    this.popupService.closePopup();
  }
}
