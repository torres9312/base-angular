import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
      path: '',
      loadChildren : () => PagesModule
  },
  {
      path: 'panel',
/*       canActivate: [AuthGuard], */
      loadChildren : () => AdminModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true
  })],
  exports: [
    RouterModule,
    PagesModule,
    AdminModule
  ]
})
export class AppRoutingModule { }
