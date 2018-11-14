import { Transaction } from './transaction'

export class Entry {
  transactions: Transaction[];
  moment: Date;
  uuid: string;

  constructor(
    transactions?: Transaction[],
    moment?: Date,
    uuid?: string,
   ) {
    this.transactions = transactions ? transactions : [];
    this.moment = moment ? moment : new Date();
    this.uuid = uuid ? uuid : "";
  }

  static fromObject = function(o): Entry {
    return new Entry(
      o.transactions.map(t => Transaction.fromObject(t)),
      new Date(o.moment),
      o.uuid);
  }

  static copy(entry: Entry): Entry {
    var obj = Object.create(entry);
    obj.transactions = entry.transactions.map(
      t => Object.create(t));
    return obj;
  }
}
