import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from "@ngxs/store";
import { Observable } from "rxjs";

import { CurrencyConvertResult } from "../../models";
import { HomeState } from "../store/home.state";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HistoryComponent {
  history$: Observable<CurrencyConvertResult[]> = this.store.select(HomeState.history);

  getHistoryItemString(item: CurrencyConvertResult): string {
    return `${this.getDateTime(item.date)}: ${item.baseAmount} ${item.baseCurrency} -> ${item.convertedAmount} ${item.convertedCurrency}`;
  }

  getDateTime(date: Date): string {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }

  constructor(private store: Store) {
  }
}
