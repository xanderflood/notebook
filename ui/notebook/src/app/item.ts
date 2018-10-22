import { Entry } from './entry';
import { Transaction } from './transaction';

export class Item {
  uuid: string = "";
  name: string = "";
  // properties: ItemProperties;

  numProduced: number = 0;
  numRemaining: number = 0;
  history: Transaction[] = [];
}

// interface ItemProperties {
//   [key: string]: string;
// }
