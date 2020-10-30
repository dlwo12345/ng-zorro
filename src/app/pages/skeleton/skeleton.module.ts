import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './skeleton.component';

const routes: Routes = [{ path: '', component: SkeletonComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [SkeletonComponent],
  exports: [SkeletonComponent],
})
export class SkeletonModule {}
