import { Component } from '@angular/core';
import { NzModalRef, NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-modal',
  template: `
    <button nz-button nzType="primary" (click)="showModal()">modal</button>
    <br /><br />
    <button nz-button nzType="primary" (click)="showConfirm()">confirm</button>
    <br /><br />
    <button nz-button nzType="primary" (click)="showInfo()">info</button>
    <br /><br />
    <button nz-button nzType="primary" (click)="showError()">error</button>
  `,
})
export class ModalComponent {
  createModal?: NzModalRef;
  confirmModal?: NzModalRef;
  infoModal?: NzModalRef;
  errorModal?: NzModalRef;

  constructor(private modal: NzModalService) {}

  showModal(): void {
    this.createModal = this.modal.create({
      nzTitle: 'create?',
      nzContent: 'create',
      nzFooter: null,
    });
  }
  showConfirm(): void {
    this.confirmModal = this.modal.confirm({
      nzTitle: 'confirm?',
      nzContent: 'confirm',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!')),
    });
  }
  showInfo(): void {
    this.infoModal = this.modal.info({
      nzTitle: 'info?',
      nzContent: 'info',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!')),
    });
  }

  showError(): void {
    this.errorModal = this.modal.error({
      nzTitle: 'error?',
      nzContent: 'error',
      nzOnOk: () =>
        new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!')),
    });
  }
}
