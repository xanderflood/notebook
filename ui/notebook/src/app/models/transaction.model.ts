import { Item } from './item.model';
import { Entry } from './entry.model';

export class Transaction {
  constructor(
    public itemUUID?: string,
    public type?: TransactionType,
    public count?: number,
  ) {
    this.itemUUID = itemUUID || null;
    this.type = type && type || TransactionType.Produced;
    this.count = count && count || 5;
  }

  static fromObject(o: any): Transaction {
    return new Transaction(
      o.itemUUID,
      o.type,
      o.count);
  }

  static copy(transaction: Transaction): Transaction {
    return Transaction.fromObject(transaction);
  }
}

export enum TransactionType {
  Produced = "Produced",
  Consumed = "Consumed",
  Cultured = "Cultured",
  Transferred = "Transferred",
}
