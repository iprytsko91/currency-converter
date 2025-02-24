import { CurrencyCode } from "./currency-code.enum";

export type Currencies = {
  [currencyCode in CurrencyCode]: number;
}
