import { Entry } from './entry.model';
import { Transaction } from './transaction.model';
import { UUIDable } from '../store/repository'

export class Item implements UUIDable {
  uuid: string = "";
  constructor(
    public name?: string,
    uuid?: string,
    public numProduced?: number,
    public numRemaining?: number,
    public properties?: ItemProperty[],
    //TODO keep this, or a separate join table?
    // history: string[] = [];
  ) {
    this.name = uuid || "";
    if (uuid) this.uuid = uuid;
    this.numProduced = numProduced || 0;
    this.numRemaining = numRemaining || 0;
    this.properties = properties ? properties.map(p => ItemProperty.fromObject(p)) : [];
  }

  static fromObject(o: any): Item {
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

  static fromObject(o): ItemProperty {
    return new ItemProperty(o.name, o.value);
  }
}
