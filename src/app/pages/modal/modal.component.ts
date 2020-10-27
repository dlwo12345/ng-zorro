import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal',
  template: `
    <button nz-button nzType="primary" (click)="showConfirm()">Confirm</button>
    <br />
    <br />
    <button nz-button nzType="primary" (click)="showModal()">
      <span>Show Modal</span>
    </button>
    <nz-modal
      [(nzVisible)]="isVisible"
      [nzTitle]="modalTitle"
      [nzContent]="modalContent"
      [nzFooter]="modalFooter"
      (nzOnCancel)="handleCancel()"
    >
      <ng-template #modalTitle> 타이틀~~ </ng-template>

      <ng-template #modalContent>
        <p>정말 끄시겠습니까?</p>
      </ng-template>

      <ng-template #modalFooter>
        <div class="dialog-footer-wrap">
          <button class="dialog-btn" (click)="handleCancel()">닫기</button>
          <button class="dialog-btn dialog-btn-blue" (click)="handleOk()">
            클릭 3초후에 끄기
          </button>
        </div>
      </ng-template>
    </nz-modal>
  `,
  styles: [
    `
      /* 커스텀 가능 */
      ::ng-deep .dialog-footer-wrap {
        text-align: center;
      }
      ::ng-deep .dialog-footer-wrap .dialog-btn:after {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        content: '';
        width: 1px;
        height: 16px;
        background-color: #d8d8d8;
      }

      ::ng-deep .dialog-footer-wrap .dialog-btn {
        flex-grow: 1;
        padding: 1px 32px;
        text-align: center;
        outline: none;
        text-decoration: none;
        display: inline-block;
        font-size: 20px;
        font-weight: 500;
        color: #888;
        position: relative;
        letter-spacing: -1px;
        margin-right: 15px;
        border: 0;
        background: white;
      }

      ::ng-deep .dialog-footer-wrap .dialog-btn:last-of-type {
        margin-right: 0px;
      }
      ::ng-deep .dialog-footer-wrap .dialog-btn:last-of-type:after {
        content: none;
      }
      ::ng-deep .dialog-btn-blue {
        color: #33a0ff;
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

  isVisible = false;
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    setTimeout(() => {
      this.isVisible = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
