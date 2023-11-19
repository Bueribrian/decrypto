import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ViewCoinComponent } from './components/view-coin/view-coin.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: '',
  },
  {
    component: ViewCoinComponent,
    path: ':coin'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
