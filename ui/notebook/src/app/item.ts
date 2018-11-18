import { Entry } from './entry';
import { Transaction } from './transaction';

export class Item {
  uuid: string = "";
  name: string = "";

  properties: ItemProperty[];

  //TODO keep this, or a separate join table?
  // history: string[] = [];

  numProduced: number = 0;
  numRemaining: number = 0;

  constructor(
    uuid?: string,
    name?: string,
    numProduced?: number,
    numRemaining?: number,
    properties?: ItemProperty[],
  ) {
    // leave these possibly undefined
    this.uuid = uuid;
    this.name = name;

    this.numProduced = numProduced || 0;
    this.numRemaining = numRemaining || 0;
    this.properties = properties || [];
  }

  static fromObject = function(o): Item {
    return new Item(
      o.uuid,
      o.name,
      o.numProduced,
      o.numRemaining,
      o.properties);
  }
}

export class ItemProperty {
  constructor(
    public name?: string,
    public value?: string,
  ) {
    this.name = this.name || "";
    this.value = this.value || "";
  }
}
