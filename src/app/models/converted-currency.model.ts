import { CurrencyCode } from "./currency-code.enum";

export class ConvertedCurrency {
  baseCurrency!: CurrencyCode;
  baseAmount!: number;
  convertedCurrency!: CurrencyCode;
  convertedAmount!: number;

  constructor(init?: Partial<ConvertedCurrency>) {
    Object.assign(this, init);
  }
}
