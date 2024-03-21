import { Component } from '@angular/core';


@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrl: './time-display.component.scss'
})
export class TimeDisplayComponent {

  time = 1

  constructor() {

    // setInterval(() => {
    //   this.time++
    // }, 1000);

  }
}
