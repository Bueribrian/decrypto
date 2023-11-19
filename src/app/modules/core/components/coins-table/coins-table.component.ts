import { Component, Input } from '@angular/core';
import { CoinGeckoCoin } from '../../models/coingecko.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coins-table',
  templateUrl: './coins-table.component.html',
  styleUrls: ['./coins-table.component.scss']
})
export class CoinsTableComponent {
  @Input({ required: true, alias: 'coins' })
  public coins!: Observable<CoinGeckoCoin[]>; 

  public displayedColumns: string[] = ['icon', 'asset', 'rate', 'lastUpdate'];
}
