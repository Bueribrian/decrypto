import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCoinComponent } from './components/view-coin/view-coin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    component: DashboardComponent,
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
