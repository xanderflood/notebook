declare function require(name: string);
const uuid: any = require('uuidv4');

export interface UUIDable {
  uuid: string;
}

export class Repository<T extends UUIDable> {
  private index: any = {};
  private array: T[]
  constructor(public ts?: T[]) {
    this.array = ts || [];

    this.array.forEach(t => {
      this.index[t.uuid] = t;
    });
  }

  all(): T[] { return this.array; }
  fetch(uuid: string): T { return this.index[uuid]; }
  add(t: T): T {
    t.uuid = uuid();

    this.array.push(t);
    this.index[t.uuid] = t;
    return t;
  }
  delete(uuid: string) {
    let deleted = false;
    for (let i = 0; i < this.array.length; i++) {
      let item = this.array[i];
      if (item.uuid === uuid) {
        // delete item
        this.array.splice(i, 1);
        deleted = true;
        break;
      }
    }

    if (!deleted) { throw "TODO: uuid not found"; }

    this.index[uuid] = undefined;
  }
}
