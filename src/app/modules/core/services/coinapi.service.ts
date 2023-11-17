import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { Asset } from '../models/asset.model';
import { ExchangeRatesParams, ExchangeRatesResponse } from '../models/rate.model';

@Injectable({
  providedIn: 'root'
})
export class CoinapiService {

  private baseUrl: string = environment.services.coinapi.url;
  private assetsUrl: string = this.baseUrl + "assets";
  private exchangeRateUrl: string = this.baseUrl + 'exchangerate/:asset_id_base?';
  private exchangeRateUrlTimeUrl: string = this.baseUrl + 'exchangerate/:assetBase/:assetQuote/history'

  // private baseUrlWS: string = 'wss://ws.coinapi.io/v1/'
  // private exchangeRateUrlWS: string = this.baseUrlWS + 'exchangerate/:asset_id_base?invert=true&';
  // private socket: WebSocket;

  constructor(
    private http: HttpClient
    ) {
      // this.socket = new WebSocket(this.baseUrlWS);
    }

  public getAssets(query?: string): Observable<Asset[]> {
      // TODO: CAMBIAR ESTO DE FORMA MAS PROLIJA

    const filterQuery = `?filter_asset_id=${query}`;
    const url = this.assetsUrl + filterQuery;

    return this.http.get<Asset[]>(url)
  }

  public getExchangeRates(params: ExchangeRatesParams): Observable<ExchangeRatesResponse> {
    let url = this.exchangeRateUrl
      .replace(':asset_id_base', params.base_asset)

      // TODO: CAMBIAR ESTO DE FORMA MAS PROLIJA
    if (params.filter_asset) {
      url += `filter_asset_id=${params.filter_asset.join(';')}&`;
    }

    if (params.time) {
      url += `filter_asset_id=${params.time}&`;
    }

    return this.http.get<ExchangeRatesResponse>(url);
  }

  public getExchangeRatesTimeSeries(params: ExchangeRatesParams){
    const url = this.exchangeRateUrlTimeUrl
    .replace(':assetBase', params.base_asset)
    .replace(':assetQuote', 'DAI')

    return this.http.get(url + '?period_id=1MIN');
  }

  // public connectSocketExchangeRates(params: ExchangeRatesParams){
  //     return new Observable(observer => {
  //       this.socket.onmessage = (event) => observer.next(event.data);
  //       this.socket.onerror = (event) => observer.error(event);
  //       this.socket.onclose = () => observer.complete();
  //     });
  // }
}
