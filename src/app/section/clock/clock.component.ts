import { Component, OnInit } from '@angular/core';
import moment from 'moment';
import { interval } from 'rxjs';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent {

  timeString: string = ''

  constructor() {

    // 1초마다 실행
    interval(1000)
      .pipe(map(() => {
        return moment().format('YYYY-MM-DD HH:mm:ss')
      }))
      .subscribe(data => {
        this.timeString = data;
      })
  }


}
