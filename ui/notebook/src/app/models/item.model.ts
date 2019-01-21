import { Entry } from './entry.model';
import { Transaction } from './transaction.model';
import { UUIDable } from '../store/repository'

export class Item implements UUIDable {
  public uuid = ""
  constructor(
    public name?: string,
    uuid?: string,
    public type?: ItemType,
    public numProduced?: number,
    public numRemaining?: number,
    public properties?: ItemProperty[],
    //TODO keep this, or a separate join table?
    // history: string[] = [];
  ) {
    this.name = name || "";
    this.uuid = uuid || "";
    this.type = type || ItemType.Inventory;
    this.numProduced = numProduced || 0;
    this.numRemaining = numRemaining || 0;
    this.properties = properties || [];
  }

  copy(): UUIDable {
    return Item.fromObject(this);
  }

  static fromObject(o: any): Item {
    return new Item(
      o.name,
      o.uuid,
      o.numProduced,
      o.numRemaining,
      o.properties.map(p => ItemProperty.fromObject(p)));
  }

  static copy(item: Item): Item {
    return Item.fromObject(item);
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

  static fromObject(p): ItemProperty {
    return new ItemProperty(p.name, p.value);
  }

  static copy(ps: ItemProperty): ItemProperty {
    return ItemProperty.fromObject(ps);
  }
}

export enum ItemType {
  Inventory = "Inventory",
  Unique = "Unique",
}
