import { Component, Input } from '@angular/core';
import { Currency } from '../../models/currency.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coins-table',
  templateUrl: './coins-table.component.html',
  styleUrls: ['./coins-table.component.scss']
})
export class CoinsTableComponent {
  @Input({ required: true, alias: 'coins' })
  public coins!: Observable<Currency[]>; 

  public displayedColumns: string[] = ['icon', 'asset', 'rate', 'lastUpdate'];
}
