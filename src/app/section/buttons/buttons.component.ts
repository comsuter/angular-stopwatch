import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrl: './buttons.component.scss'
})
export class ButtonsComponent {

  // 이벤트 에미터 선언
  @Output() clickEvent = new EventEmitter<String>();

  // 버튼 클릭시 부모 컴포넌트에 데이터 전달
  executeButton(command: string) {
    this.clickEvent.emit(command);
  }

}
