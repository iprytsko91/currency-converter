import { CurrencyCode } from "./models";

export const CurrenciesApi: string = 'https://api.freecurrencyapi.com/v1/latest';
export const ApiKey: string = 'fca_live_egw9JpAJCsp48M42UTiTxdgSj4wfwQ2knGAfHYAj';
export const BaseCurrency: string = 'USD';
export const DefaultCurrencies: string[] = [CurrencyCode.USD, CurrencyCode.EUR, CurrencyCode.CAD];

export const EmailPattern: string = '^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$';
