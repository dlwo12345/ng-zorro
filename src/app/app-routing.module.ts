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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
