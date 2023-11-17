import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-price-percentage',
  templateUrl: './price-percentage.component.html',
  styleUrls: ['./price-percentage.component.scss']
})
export class PricePercentageComponent {
  @Input({ required: true, alias: 'price' })
  public price!: number;

  get priceState(): 'low' | 'high' {
    return this.price < 0 ? 'low' : 'high'
  }

}
