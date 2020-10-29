import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-confirm',
  template: `
    <button nz-button nzType="primary" (click)="showModal()">
      <span>Show Modal</span>
    </button>
    <nz-modal
      [nzCloseIcon]="null"
      [(nzVisible)]="isVisible"
      nzClosable="false"
      [nzWidth]="'320px'"
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
            확인
          </button>
        </div>
      </ng-template>
    </nz-modal>
  `,
  styleUrls: ['./custom-confirm.component.scss'],
})
export class CustomConfirmComponent {
  isVisible = false;
  constructor() {}

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
