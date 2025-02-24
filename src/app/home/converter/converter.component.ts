import { Component, OnInit } from '@angular/core';

import { CurrencyCode } from "../../models";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss'],
  standalone: false
})
export class ConverterComponent implements OnInit {
  baseAmount: number = 1;
  baseCurrency: CurrencyCode = CurrencyCode.USD;
  convertedCurrency: CurrencyCode = CurrencyCode.EUR;
  allCurrencies: CurrencyCode[] = Object.values(CurrencyCode);
  convertedAmount: number = 0;


  constructor() {
  }

  ngOnInit() {
  }

}
