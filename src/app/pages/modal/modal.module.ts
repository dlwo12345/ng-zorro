import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { ModalComponent } from './modal.component';

const routes: Routes = [{ path: '', component: ModalComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [ModalComponent],
  exports: [ModalComponent],
})
export class ModalModule {}
