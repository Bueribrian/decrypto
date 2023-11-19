import { Component, Input } from '@angular/core';
import { CoinGeckoCoin } from '../../models/coingecko.model';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss']
})
export class CoinCardComponent {
  @Input({ required: true, alias: 'coin' })
  public coin!: CoinGeckoCoin; 
  
  @Input({ required: true, alias: 'currency' })
  public currency!: string; 
}
