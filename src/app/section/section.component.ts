import { Component } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {

  present : string = 'welcome';

  startTime($event: any) {
    this.present = $event;
  }
}
