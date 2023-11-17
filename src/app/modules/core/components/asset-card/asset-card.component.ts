import { Component, Input } from '@angular/core';
import { Rate } from '../../models/rate.model';

@Component({
  selector: 'app-asset-card',
  templateUrl: './asset-card.component.html',
  styleUrls: ['./asset-card.component.scss']
})
export class AssetCardComponent {
  @Input({ required: true, alias: 'rate' })
  public rate!: Rate; 
  
  @Input({ required: true, alias: 'price_unit' })
  public price_unit!: string; 

}
