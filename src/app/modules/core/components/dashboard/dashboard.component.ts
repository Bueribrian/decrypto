import { Component, inject } from '@angular/core';
import { ReplaySubject, BehaviorSubject, takeUntil } from 'rxjs';
import { CoinapiService } from '../../services/coinapi.service';
import { Rate } from '../../models/rate.model';
import { CoingeckoService } from '../../services/coingecko.service';
import { CoinGeckoCoin } from '../../models/coingecko.model';

// TODO: Make responsive
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private $destroy = new ReplaySubject();
  private coinGeckoService = inject(CoingeckoService);

  // TODO: Pasar algunas cosas al servicio
  public loading: boolean = false;
  public error: { message: string } | null = null;
  public displayType: 'table' | 'cards' = 'cards';
  public currencies: string[] = ['ARS', 'BTC', 'USD', 'USDT', 'DAI', 'ETH'];
  public selectedCurrency: string = 'USD';
  public $coins: BehaviorSubject<CoinGeckoCoin[]> = new BehaviorSubject<CoinGeckoCoin[]>([]);

  ngOnInit() {
    this.getTrendigCurrencies();
    console.log('holaaa')
  }

  public getTrendigCurrencies() {
    this.loading = true;
    this.error = null; 

    this.coinGeckoService.getTrendingCurrencies({
      fromCurrency: this.selectedCurrency,
      price_change_percentage: '1h',
      per_page: 20
    }).subscribe({
      next: coins => {
        this.$coins.next(coins);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = { message: err }
      }
    })
  }

  ngOnDestroy() {
    this.$destroy.next(1);
    this.$destroy.complete();
  }
}
