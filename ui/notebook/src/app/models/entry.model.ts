import { Transaction } from './transaction.model'
import { UUIDable } from '../store/repository'

export class Entry implements UUIDable {
  uuid: string = "";
  constructor(
    public transactions?: Transaction[],
    public moment?: Date,
    uuid?: string,
   ) {
    this.transactions = transactions ? transactions : [];
    this.moment = moment ? moment : new Date();
    if (uuid) this.uuid = uuid;
  }

  static fromObject(o: any): Entry {
    return new Entry(
      o.transactions.map(t => Transaction.fromObject(t)),
      new Date(o.moment),
      o.uuid);
  }

  static copy(entry: Entry): Entry {
    return Entry.fromObject(entry);
  }
}
