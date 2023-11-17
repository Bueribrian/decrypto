import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: PageNotFoundComponent,
    path: ':coin'
  },
  {
    component: PageNotFoundComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
