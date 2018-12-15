declare function require(name: string);
const uuid: any = require('uuidv4');

export interface UUIDable {
  uuid: string;
}

export class MockDB<T extends UUIDable> {
  private index: any = {};
  private array: T[];
  constructor(public ts?: T[]) {
    this.array = ts || [];

    this.array = (ts || []).map(t => {
      t.uuid = uuid();
      this.index[t.uuid] = t;
      return t;
    });
  }

  all(): T[] { return this.array; }
  fetch(uuid: string): T {
    var res = this.index[uuid];
    if (!res) throw 'TODO 404';
    return res;
  }
  insert(t: T) {
    if (t.uuid.length != 0) {
      throw "TODO 400 cannot create item with UUID"
    }

    t.uuid = uuid();
    this.array.push(t);
    this.index[t.uuid] = t;
    return t;
  }
  update(obj: any): T {
    if (!obj.uuid.length) {
      throw "TODO 400 cannot update item without UUID"
    }

    var subject = this.index[obj.uuid];
    if (!subject) throw "TODO 404";

    Object.assign(subject, obj);
    return subject;
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
