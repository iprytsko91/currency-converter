import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ApiKey, BaseCurrency, CurrenciesApi, DefaultCurrencies } from "../constants";
import { Currencies, CurrenciesResponse } from "../models";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {

  }

  getRates(baseCurrency: string = BaseCurrency, currencies: string[] = DefaultCurrencies): Observable<Currencies> {
    return this.http.get<CurrenciesResponse>(CurrenciesApi, {
      params: {
        apikey: ApiKey,
        base_currency: baseCurrency,
        currencies: currencies.join(',')
      }
    }).pipe(
      map(res => res.data),
    )
  }
}
