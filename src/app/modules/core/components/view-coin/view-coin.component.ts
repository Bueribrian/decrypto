import { Component, inject } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { BehaviorSubject, ReplaySubject, combineLatest, finalize, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MarketChartResponse } from '../../models/currency.model';
import { MatSelectChange } from '@angular/material/select';
import { Coin } from '../../models/coin.model';

@Component({
  selector: 'app-view-coin',
  templateUrl: './view-coin.component.html',
  styleUrls: ['./view-coin.component.scss']
})
export class ViewCoinComponent {
  private $destroy = new ReplaySubject(0);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  public currencyService = inject(CurrencyService);

  public loading: boolean = true;
  public coinId: string = "";
  public daysList: number[] = [1, 7, 14, 28];
  public selectedDays: number = 7;
  public $coinData: BehaviorSubject<Coin | null> = new BehaviorSubject<Coin | null>(null);
  public $marketChartData: BehaviorSubject<MarketChartResponse | null> = new BehaviorSubject<MarketChartResponse | null>(null);

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.$destroy))
      .subscribe(params => {
        this.coinId = params['coin'];

        if (this.coinId) {
          this.getCoin();
        } else {
          this.router.navigate(['/coins']);
        }

      })
  }

  get coin(): Coin | null {
    return this.$coinData.value;
  }

  public getCoin() {
    this.loading = true;

    combineLatest({
      coin: this.currencyService.getCurrency(this.coinId),
      marketChartData: this.currencyService.getMarketChart({
        id: this.coinId,
        vs_currency: this.currencyService.selectedCurrency,
        days: this.selectedDays
      })
    })
      .pipe(
        finalize(() => this.loading = false),
        takeUntil(this.$destroy))
      .subscribe({
        next: ({ coin, marketChartData }) => {
          this.$coinData.next(coin);
          this.$marketChartData.next(marketChartData);
        },
        error: () => {
          this.router.navigate(['/coins']);
        }
      })
  }


  public vsCurrencySelect(currency: MatSelectChange): void {
    this.currencyService.selectedCurrency = currency.value;
    this.getCoin();
  }

  public historialDaysSelect(): void {
    this.getCoin();
  }

  ngOnDestroy() {
    this.$destroy.next(1);
    this.$destroy.complete();
  }
}
