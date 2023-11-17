import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { UiModule } from '../ui/ui.module';
import { HomeComponent } from './components/home/home.component';
import { AssetCardComponent } from './components/asset-card/asset-card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AssetsTableComponent } from './components/assets-table/assets-table.component';
import { MatTooltipModule } from '@angular/material/tooltip';

/* Angular material modules */
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoinCardComponent } from './components/coin-card/coin-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    AssetCardComponent,
    DashboardComponent,
    AssetsTableComponent,
    PageNotFoundComponent,
    CoinCardComponent
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
    MatTooltipModule
  ]
})
export class CoreModule { }
