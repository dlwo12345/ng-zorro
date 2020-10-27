import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { Routes, RouterModule } from '@angular/router';

import { MessageComponent } from './message.component';

const routes: Routes = [{ path: '', component: MessageComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [MessageComponent],
  exports: [MessageComponent],
})
export class MessageModule {}
