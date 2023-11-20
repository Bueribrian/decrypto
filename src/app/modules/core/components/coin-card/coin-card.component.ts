import { Component, Input } from '@angular/core';
import { Currency } from '../../models/currency.model';

@Component({
  selector: 'app-coin-card',
  templateUrl: './coin-card.component.html',
  styleUrls: ['./coin-card.component.scss']
})
export class CoinCardComponent {
  @Input({ required: true, alias: 'coin' })
  public coin!: Currency; 

  public getImage(): string{
    if(typeof this.coin.image === 'string'){
      return this.coin.image
    }else{
      return this.coin.image.large
    }
  }

}
