export class Transaction {
  type: TransactionType;

  itemUUID: string; //consumed
  count: number; //consumed & produced
  name: string; //produced
}

export enum TransactionType {
  Produced = 0,
  Consumed = 1,
}
