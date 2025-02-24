import { Component, Input } from '@angular/core';

import { ConvertedCurrency, CurrencyCode } from "../../models";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: false
})
export class HistoryComponent {

  // TODO via store
  @Input() public items: ConvertedCurrency[] = [
    new ConvertedCurrency({
      baseCurrency: CurrencyCode.USD,
      baseAmount: 1,
      convertedCurrency: CurrencyCode.EUR,
      convertedAmount: 0.55
    }),
    new ConvertedCurrency({
      baseCurrency: CurrencyCode.USD,
      baseAmount: 1,
      convertedCurrency: CurrencyCode.EUR,
      convertedAmount: 0.55
    })
  ];

  getHistoryItemString(item: ConvertedCurrency): string {
    return `${item.baseAmount} ${item.baseCurrency} -> ${item.convertedAmount} ${item.convertedCurrency}`;
  }
}
