import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';

const routes: Routes = [
  {
    path: 'coins',
    pathMatch: 'full',
    loadChildren: () => import('./modules/core/core.module').then(m => m.CoreModule)
  },
  {
    // TODO: CAMBIAR A NOTFOUND
    path: '**',
    redirectTo: 'coins'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
