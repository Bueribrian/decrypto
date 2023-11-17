import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { CoinIconComponent } from './components/coin-icon/coin-icon.component';
import { PricePercentageComponent } from './components/price-percentage/price-percentage.component'
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    NavbarComponent,
    CoinIconComponent,
    PricePercentageComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule
  ],
  exports: [
    NavbarComponent,
    CoinIconComponent,
    PricePercentageComponent
  ]
})
export class UiModule { }
