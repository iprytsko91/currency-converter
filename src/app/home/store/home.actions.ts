import { CurrencyConvertResult } from '../../models';

export class AddCurrencyConvertResult {
  static readonly type = '[Home] AddCurrencyExchangeResult';

  constructor(public payload: CurrencyConvertResult) {}
}
