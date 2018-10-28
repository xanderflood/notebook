import { Item } from './item';
import { Entry } from './entry';

export class Transaction {
  item: Item;
  type: TransactionType;
  count: number;

  constructor(
    item?: Item,
    type?: TransactionType,
    count?: number,
  ) {
    this.item = item || new Item("", "");
    this.type = type && type || TransactionType.Produced;
    this.count = count && count || 5;
  }

  static fromObject = function(o): Transaction {
    return new Transaction(
      Item.fromObject(o.item),
      o.type,
      o.count);
  }
}

export enum TransactionType {
  Produced = "Produced",
  Consumed = "Consumed",
}
