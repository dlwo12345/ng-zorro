import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    NzMessageModule,
    NzButtonModule,
  ],
  exports: [NzLayoutModule, NzMenuModule, NzMessageModule, NzButtonModule],
  providers: [],
  declarations: [],
})
export class NgZorroModule {}
