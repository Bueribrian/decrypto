import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoinGeckoCoin, CoinMarketParams } from '../models/coingecko.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoingeckoService {
  private baseUrl: string = "https://api.coingecko.com/api/v3/";
  private trendingCurrenciesUrl: string = this.baseUrl + 'coins/markets';

  constructor(private http: HttpClient) { }

  public getTrendingCurrencies(params: CoinMarketParams): Observable<CoinGeckoCoin[]>{
    const queryParams = {
      vs_currency: params.fromCurrency,
      order: 'gecko_desc',
      per_page: params.per_page ?? 10,
      page: params.page ?? 1,
      price_change_percentage: params.price_change_percentage ?? '1h'
    }
    console.log('holaa')
    return this.http.get<CoinGeckoCoin[]>(this.trendingCurrenciesUrl, { params: queryParams });
  }

}
