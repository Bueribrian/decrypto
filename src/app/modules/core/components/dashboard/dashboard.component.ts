import { Component, inject } from '@angular/core';
import { ReplaySubject, BehaviorSubject, finalize } from 'rxjs';
import { CurrencyService } from '../../services/currency.service';
import { Currency } from '../../models/currency.model';
import { MatSelectChange } from '@angular/material/select';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  private $destroy = new ReplaySubject(0);

  public currencyService = inject(CurrencyService);
  public loading: boolean = false;
  public error: { message: string } | null = null;
  public displayType: 'table' | 'cards' = 'cards';
  public $coins: BehaviorSubject<Currency[]> = new BehaviorSubject<Currency[]>([]);

  ngOnInit() {
    this.getTrendigCurrencies();
  }

  public getTrendigCurrencies() {
    this.loading = true;
    this.error = null;

    this.currencyService.getTrendingCurrencies({
      fromCurrency: this.currencyService.selectedCurrency,
      per_page: 20
    })
      .pipe(finalize(() => this.loading = false))
      .subscribe({
        next: coins => {
          this.$coins.next(coins.filter(coin => coin.symbol.toUpperCase() !== this.currencyService.selectedCurrency));
        },
        error: (err) => {
          this.error = { message: 'There was an error loading the coins.' };
        }
      })
  }

  public handlerSelect(currency: MatSelectChange): void {
    this.currencyService.selectedCurrency = currency.value;
    this.getTrendigCurrencies();
  }

  ngOnDestroy() {
    this.$destroy.next(1);
    this.$destroy.complete();
  }
}
