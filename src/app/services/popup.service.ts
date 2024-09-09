import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

interface PopupData {
  title: string;
  message: string;
  isVisible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class PopupService {


  private popupData = new BehaviorSubject<PopupData>({
    title: '',
    message: '',
    isVisible: false
  });

  popupState = this.popupData.asObservable();

  showPopup(title: string, message: string) {
    this.popupData.next({ title, message, isVisible: true });
  }

  closePopup() {
    this.popupData.next({ title: '', message: '', isVisible: false });
  }
}
