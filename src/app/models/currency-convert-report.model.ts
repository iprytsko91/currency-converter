import { CurrencyCode } from "./currency-code.enum";

export class CurrencyConvertResult {
  baseCurrency!: CurrencyCode;
  baseAmount!: number;
  convertedCurrency!: CurrencyCode;
  convertedAmount!: number;
  readonly date: Date = new Date();

  constructor(init?: Partial<CurrencyConvertResult>) {
    Object.assign(this, init);
  }
}
