import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import { ApiKey, CurrenciesApi } from "../constants";
import { Currencies, CurrenciesResponse, CurrencyCode, CurrencyConvertResult } from "../models";

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http: HttpClient) {
  }

  convert(amount: number, baseCurrency: CurrencyCode, currencyTo: CurrencyCode): Observable<CurrencyConvertResult> {
    return this.getRates(baseCurrency, [currencyTo])
      .pipe(
        map((currencies: Currencies) => +(amount * currencies[currencyTo]).toFixed(3)),
        map((convertedAmount) => {
          return new CurrencyConvertResult({
            baseCurrency: baseCurrency,
            baseAmount: amount,
            convertedCurrency: currencyTo,
            convertedAmount: convertedAmount,
          });
        })
      )
  }

  private getRates(baseCurrency: string, currencies: string[]): Observable<Currencies> {
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
