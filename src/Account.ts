import CurrencyAPI from "./CurrencyAPI";

export default class Account {
  balance: number;
  currencyAPI: CurrencyAPI
  constructor(currencyAPI: CurrencyAPI) {
    this.balance = 0;
    this.currencyAPI = currencyAPI

  }

  credit (amount: number, currency?: string) {
    if(currency) {
      amount = this.currencyAPI.convert(amount, currency)
    }
    this.balance += amount;
  }

  debit (amount: number) {
    return this.balance -= amount
  }

  getBalance () {
    return this.balance;
  }

}