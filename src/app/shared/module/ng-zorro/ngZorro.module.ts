import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  imports: [CommonModule, NzLayoutModule, NzMenuModule],
  exports: [NzLayoutModule, NzMenuModule],
  providers: [],
  declarations: [],
})
export class NgZorroModule {}
