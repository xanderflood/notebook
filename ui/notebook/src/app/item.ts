import { Entry } from './entry';
import { Transaction } from './transaction';

export class Item {
  uuid: string = "";
  name: string = "";
  // properties: ItemProperties;

  constructor(
    uuid: string,
    name: string,
  ) {
    this.uuid = uuid;
    this.name = name;
  }

  numProduced: number = 0;
  numRemaining: number = 0;

  //TODO keep this, or a separate join table?
  history: Transaction[] = [];

  static fromObject = function(o): Item {
    return new Item(o.uuid, o.name);
  }
}

// interface ItemProperties {
//   [key: string]: string;
// }
