import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'coins',
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'coins'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
