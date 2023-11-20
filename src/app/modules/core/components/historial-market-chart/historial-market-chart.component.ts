import { Component, Input } from '@angular/core';
import { MarketChartResponse } from '../../models/currency.model';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-historial-market-chart',
  templateUrl: './historial-market-chart.component.html',
  styleUrls: ['./historial-market-chart.component.scss']
})
export class HistorialMarketChartComponent {
  @Input('data') 
  public data!: BehaviorSubject<MarketChartResponse|null>;

  public lineChartData: { data: number[], label: string }[] = [];
  public lineChartLabels: string[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';

  ngOnInit(){
    if(this.data.value){
      this.generateChart(this.data.value);
    }
  }

  private generateChart(marketChartStats: MarketChartResponse): void {
    const prices: any[] = marketChartStats.prices;
    const formattedPrices: number[] = prices.map(priceData => priceData[1]);
    const timestamps: number[] = prices.map(priceData => priceData[0]);

    this.lineChartData = [{ data: formattedPrices, label: 'Price' }];
    this.lineChartLabels = timestamps.map(timestamp => new Date(timestamp).toLocaleDateString());
  }
}
