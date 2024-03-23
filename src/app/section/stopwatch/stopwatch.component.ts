import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PageToggleService } from '../../share/page-toggle.service';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.scss']
})
export class StopwatchComponent {

  present: string = 'welcome';
  routingCount: number = 0;


  // 서비스 사용시
  constructor(
    private router: Router, // 멤버변수로 자동 등록됨
    private pageToggleService: PageToggleService,
  ) {  }

  startTime($event: any) {
    this.present = $event;
  }

  goClock() {
    // this.router.navigateByUrl('/clock')
    this.pageToggleService.goPage('/clock')

  }
}
