import { Transaction } from './transaction'

export class Entry {
  uuid: string = "";
  moment: Date = new Date();
  transactions: Transaction[];

  constructor(transactions?: Transaction[]) {
    this.transactions = transactions && transactions || [];
  }

  clone(): Entry {
    var obj = Object.create(this);
    obj.transactions = this.transactions.map(
      t => Object.create(t));
    return obj;
  }
}
