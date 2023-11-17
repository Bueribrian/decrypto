import { Component, Input } from '@angular/core';
import { Rate } from '../../models/rate.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-assets-table',
  templateUrl: './assets-table.component.html',
  styleUrls: ['./assets-table.component.scss']
})
export class AssetsTableComponent {
  @Input({ required: true, alias: 'rates' })
  public rates!: Observable<Rate[]>; 

  public displayedColumns: string[] = ['icon', 'asset', 'rate', 'lastUpdate'];

}
