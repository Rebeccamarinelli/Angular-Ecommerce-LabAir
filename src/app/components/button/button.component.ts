import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Output() buttonClick = new EventEmitter<Event>();

  onClick(event: Event): void {
    
      this.buttonClick.emit(event);

  }
}