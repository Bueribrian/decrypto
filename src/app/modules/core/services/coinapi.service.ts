import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environment/environment';
import { Observable } from 'rxjs';
import { Asset } from '../models/asset.model';

@Injectable({
  providedIn: 'root'
})
export class CoinapiService {

  private baseUrl: string = environment.services.coinapi.url;
  private assetsUrl: string = this.baseUrl + "assets";

  constructor(private http: HttpClient) { }

  public getAssets(query?: string): Observable<Asset[]> {
    const filterQuery = `?filter_asset_id=${query}`;
    const url = this.assetsUrl + filterQuery;
    
    return this.http.get<Asset[]>(url)
  }

}
