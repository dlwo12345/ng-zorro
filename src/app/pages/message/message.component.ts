import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-message',
  template: `
    <button nz-button [nzType]="'primary'" (click)="showMessage()">
      메세지 확인
    </button>
  `,
})
export class MessageComponent {
  constructor(private message: NzMessageService) {}

  showMessage() {
    this.message.info('안녕하세요');
  }
}
