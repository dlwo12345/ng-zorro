import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { CustomConfirmComponent } from './custom-confirm.component';

const routes: Routes = [{ path: '', component: CustomConfirmComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [CustomConfirmComponent],
  exports: [CustomConfirmComponent],
})
export class CustomConfirmModule {}
