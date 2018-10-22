import { Item } from './item';
import { Entry } from './entry';

export class Transaction {
  entry: Entry;
  item: Item;
  type: TransactionType;
  count: number;

  constructor(
    entry: Entry,
    item?: Item,
    type?: TransactionType,
    count?: number,
  ) {
    this.entry = entry;
    this.item = item || new Item();
    this.type = type && type || TransactionType.Produced;
    this.count = count && count || 5;
  }
}

export enum TransactionType {
  Produced = "Produced",
  Consumed = "Consumed",
}
