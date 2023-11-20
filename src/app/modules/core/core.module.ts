import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { UiModule } from '../ui/ui.module';
import { NgChartsModule } from 'ng2-charts';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CoinCardComponent } from './components/coin-card/coin-card.component';
import { CoinsTableComponent } from './components/coins-table/coins-table.component';
import { ViewCoinComponent } from './components/view-coin/view-coin.component';

/* Angular material modules */
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    DashboardComponent,
    CoinCardComponent,
    CoinsTableComponent,
    ViewCoinComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    UiModule,
    FormsModule,
    MatButtonToggleModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTooltipModule,
    NgChartsModule
  ]
})
export class CoreModule { }
