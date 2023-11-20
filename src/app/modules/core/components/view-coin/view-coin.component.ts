import { Component, inject } from '@angular/core';
import { CurrencyService } from '../../services/currency.service';
import { BehaviorSubject, ReplaySubject, combineLatest, finalize, takeUntil } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'cypress/types/jquery';

@Component({
  selector: 'app-view-coin',
  templateUrl: './view-coin.component.html',
  styleUrls: ['./view-coin.component.scss']
})
export class ViewCoinComponent {
  private $destroy = new ReplaySubject(0);
  private currencyService = inject(CurrencyService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  
  public loading: boolean = false;
  public $coinData: BehaviorSubject<any> = new BehaviorSubject(null)

  ngOnInit() {
    this.route.params
      .pipe(takeUntil(this.$destroy))
      .subscribe(params => {
        const coinId = params['coin'];

        if (!coinId) this.router.navigate(['/coins']);

        this.getCoin(coinId)
      })
  }

  private getCoin(id: string) {
    this.loading = true;
    
    combineLatest({
      coin: this.currencyService.getCurrency(id),
      market_chart: this.currencyService.getMarketChart({
        id,
        vs_currency: 'USD',
        days: 14
      })
    })
      .pipe(
        finalize(() => this.loading = false),
        takeUntil(this.$destroy))
      .subscribe({
        next: (data) => {
          this.$coinData.next(data.coin);
        },
        error: (error) => {
          this.router.navigate(['/coins']);
        }
      })
  }

  ngOnDestroy() {
    this.$destroy.next(1);
    this.$destroy.complete();
  }
}
