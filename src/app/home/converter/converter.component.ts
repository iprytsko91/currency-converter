import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { tap } from "rxjs";
import { Store } from "@ngxs/store";

import { CurrencyCode } from "../../models";
import { CurrencyService } from "../../services";
import { AddCurrencyConvertResult } from "../store/home.actions";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConverterComponent {
  baseAmount: number = 1;
  baseCurrency: CurrencyCode = CurrencyCode.USD;
  convertedCurrency: CurrencyCode = CurrencyCode.EUR;
  allCurrencies: CurrencyCode[] = Object.values(CurrencyCode);
  convertedAmount: number = 0;

  constructor(private currencyService: CurrencyService,
              private store: Store,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  convert(): void {
    this.currencyService.convert(this.baseAmount, this.baseCurrency, this.convertedCurrency)
      .pipe(
        tap(res => {
          this.convertedAmount = res.convertedAmount;
          this.changeDetectorRef.detectChanges();
        }),
        tap(res => {
          this.store.dispatch(new AddCurrencyConvertResult(res));
        })
      )
      .subscribe();
  }
}
