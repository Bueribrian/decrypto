import { Component, inject } from '@angular/core';
import { CoinapiService } from '../../services/coinapi.service';
import { ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  private $destroy = new ReplaySubject();
  private coinService = inject(CoinapiService);

  ngOnInit() {
    this.coinService.getAssets('BTC;ETH;USD;EUR')
      .pipe(takeUntil(this.$destroy))
      .subscribe(console.log);
  }

  ngOnDestroy() {
    this.$destroy.next(1);
    this.$destroy.complete();
  }
}
