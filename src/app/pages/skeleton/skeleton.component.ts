import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  template: `
    <nz-skeleton></nz-skeleton>

    <nz-skeleton [nzAvatar]="true" [nzParagraph]="{ rows: 4 }"></nz-skeleton>
  `,
  styles: [``],
})
export class SkeletonComponent {
  constructor() {}
}
