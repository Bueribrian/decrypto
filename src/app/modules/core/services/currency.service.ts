import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency, CurrencyMarketParams, MarketChartParams, MarketChartResponse } from '../models/currency.model';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  private baseUrl: string = environment.services.coingecko.url;
  private trendingCurrenciesUrl: string = this.baseUrl + 'coins/markets';
  private currencyByIdUrl: string = this.baseUrl + 'coins/:id';
  private marketChartUrl: string = this.currencyByIdUrl + '/market_chart';

  private _$currencyList: BehaviorSubject<string[]> = new BehaviorSubject(['ARS', 'BTC', 'USD', 'ETH']);
  private _$selectedCurrency: BehaviorSubject<string> = new BehaviorSubject('USD');

  constructor(private http: HttpClient) { }

  public get selectedCurrency(): string {
    return this._$selectedCurrency.value;
  }

  public set selectedCurrency(currency: string) {
    this._$selectedCurrency.next(currency);
  }

  public get currencyList(): string[] {
    return this._$currencyList.value;
  }

  public getTrendingCurrencies(params: CurrencyMarketParams): Observable<Currency[]> {
    const queryParams = {
      vs_currency: params.fromCurrency,
      order: 'gecko_desc',
      per_page: params.per_page ?? 10,
      page: params.page ?? 1,
      price_change_percentage: params.price_change_percentage ?? '1h'
    }

    return this.http
      .get<Currency[]>(this.trendingCurrenciesUrl, { params: queryParams })
  }

  public getCurrency(currencyId: string) {
    const url = this.currencyByIdUrl.replace(':id', currencyId);

    return this.http.get(url);
  }

  public getMarketChart(params: MarketChartParams): Observable<MarketChartResponse> {
    const url = this.marketChartUrl.replace(':id', params.id);

    return this.http.get<MarketChartResponse>(url, { params: { ...params } })
  }

}
