import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal',
  template: `
    <button nz-button nzType="primary" (click)="showConfirm()">Confirm</button>
    <br />
    <br />
    <button nz-button nzType="primary" (click)="showModalMiddle()">
      Vertically centered modal dialog
    </button>

    <nz-modal
      nzWrapClassName="custom-class-modal"
      [(nzVisible)]="isVisibleMiddle"
      nzTitle="Vertically centered modal dialog"
      (nzOnCancel)="handleCancelMiddle()"
      (nzOnOk)="handleOkMiddle()"
    >
      <p>1...</p>
      <p>2...</p>
      <p>3...</p>
    </nz-modal>
  `,
  styles: [
    `
      /* 커스텀 가능 */
      ::ng-deep .custom-class-modal {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      ::ng-deep .custom-class-modal .ant-modal {
        top: 0;
      }

      ::ng-deep .custom-class-modal .ant-modal {
        top: 0;
      }
      ::ng-deep .custom-class-modal .ant-modal-footer {
        text-align: center;
      }
    `,
  ],
})
export class ModalComponent {
  confirmModal?: NzModalRef; // For testing by now

  isVisibleMiddle = false;

  constructor(private modal: NzModalService) {}

  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'Do you Want to delete these items?',
      nzContent:
        'When clicked the OK button, this dialog will be closed after 1 second',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!')),
    });
  }

  showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }
  handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
