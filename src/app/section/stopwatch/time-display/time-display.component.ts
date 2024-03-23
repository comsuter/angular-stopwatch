import { Component, Input, SimpleChanges } from '@angular/core';
import { PageToggleService } from '../../../share/page-toggle.service';


@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrl: './time-display.component.scss',
  // providers: [
  //   PageToggleService
  // ]
})
export class TimeDisplayComponent {

  @Input() inputData: string = '';

  min: number = 0
  sec: number = 0
  ms: number = 0

  timeInterval: any

  constructor(public pageToggleService: PageToggleService) {

  }

  timeStart() {
    this.timeStop();
    this.timeInterval = setInterval(() => {
      if (this.ms >= 100) {
        this.ms = 0;
        this.sec++;
      }
      if (this.sec >= 60) {
        this.sec = 0;
        this.min++;
      }
      this.ms++;
    }, 10)
  }

  timeStop() {
    clearInterval(this.timeInterval)
  }

  timeReset() {
    this.timeStop();
    this.ms = 0;
    this.sec = 0;
    this.min = 0;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   for (let propName in changes) {
  //     if (propName == 'inputData') {
  //       console.log("버튼 클릭 전 : " + changes[propName].currentValue)
  //       console.log("버튼 클릭 후 : " + changes[propName].previousValue)
  //       switch (changes[propName].currentValue) {
  //         case 'start':
  //           this.timeStart();
  //           break;
  //         case 'stop':
  //           this.timeStop();
  //           break;
  //         case 'reset':
  //           this.timeReset();
  //           break;
  //       }
  //     }
  //   }
  // }
}
