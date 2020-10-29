import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { DatepickerComponent } from './datepicker.component';

const routes: Routes = [{ path: '', component: DatepickerComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [DatepickerComponent],
  exports: [DatepickerComponent],
})
export class DatepickerModule {}
