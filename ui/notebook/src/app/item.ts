import { Entry } from './entry';
import { Transaction } from './transaction';

export class Item {
  uuid: string = "";
  name: string = "";

  //TODO: properties: ItemProperties;

  //TODO keep this, or a separate join table?
  // history: Transaction[] = [];

  numProduced: number = 0;
  numRemaining: number = 0;

  constructor(
    uuid: string,
    name: string,
    numProduced: number,
    numRemaining: number,
  ) {
    this.uuid = uuid;
    this.name = name;
    this.numProduced = numProduced;
    this.numRemaining = numRemaining;
  }

  static fromObject = function(o): Item {
    return new Item(o.uuid, o.name, o.numProduced, o.numRemaining);
  }
}

// interface ItemProperties {
//   [key: string]: string;
// }
