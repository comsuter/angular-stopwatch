import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  @Output() clickEvent = new EventEmitter();


  start() {
    this.clickEvent.emit();
  }

}
