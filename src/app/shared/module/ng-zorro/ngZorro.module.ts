import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzMessageModule,
    NzButtonModule,
    NzModalModule,
  ],
  exports: [
    NzLayoutModule,
    NzMenuModule,
    NzMessageModule,
    NzButtonModule,
    NzModalModule,
  ],
  providers: [],
  declarations: [],
})
export class NgZorroModule {}
