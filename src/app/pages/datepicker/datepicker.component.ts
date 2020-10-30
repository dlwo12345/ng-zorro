import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  template: `
    <nz-date-picker
      *ngIf="mode === 'date'"
      nzDropdownClassName="test"
      nzPlaceHolder="일"
      nzFormat="yyyy.MM.dd"
      [(ngModel)]="date"
      nzSuffixIcon="down"
      (ngModelChange)="onChange($event)"
    ></nz-date-picker>
    <nz-date-picker
      *ngIf="mode === 'month'"
      nzFormat="yyyy.MM"
      nzPlaceHolder="월"
      nzMode="month"
      [(ngModel)]="date"
      nzSuffixIcon="down"
      (ngModelChange)="onChange($event)"
    ></nz-date-picker>
    <nz-date-picker
      *ngIf="mode === 'year'"
      nzFormat="yyyy"
      nzPlaceHolder="년"
      nzMode="year"
      [(ngModel)]="date"
      nzSuffixIcon="down"
      (ngModelChange)="onChange($event)"
    ></nz-date-picker>
    <br />
    <br />
    <button (click)="modeChange('date')">date</button>
    <button (click)="modeChange('month')">month</button>
    <button (click)="modeChange('year')">year</button>
    {{ mode }}
  `,
  styles: [
    `
      nz-date-picker {
        margin: 0 8px 12px 0;
      }
      ::ng-deep .ant-picker {
        border: 0;
      }
      ::ng-deep .ant-picker-input > input {
        font-size: 20px;
        font-weight: bold;
      }
    `,
  ],
})
export class DatepickerComponent {
  date = null;
  mode = 'year';
  constructor() {}

  modeChange(target) {
    this.mode = target;
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
