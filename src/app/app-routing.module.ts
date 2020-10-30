import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/message' },
  {
    path: 'message',
    loadChildren: () =>
      import('./pages/message/message.module').then((m) => m.MessageModule),
  },
  {
    path: 'modal',
    loadChildren: () =>
      import('./pages/modal/modal.module').then((m) => m.ModalModule),
  },
  {
    path: 'custom-confirm',
    loadChildren: () =>
      import('./pages/custom-confirm/custom-confirm.module').then(
        (m) => m.CustomConfirmModule
      ),
  },
  {
    path: 'datepicker',
    loadChildren: () =>
      import('./pages/datepicker/datepicker.module').then(
        (m) => m.DatepickerModule
      ),
  },
  {
    path: 'form',
    loadChildren: () =>
      import('./pages/form/form.module').then(
        (m) => m.FormModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
