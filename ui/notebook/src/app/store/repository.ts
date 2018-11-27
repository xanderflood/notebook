export interface UUIDable {
  uuid: string;
}

export class Repository<T extends UUIDable> {
  private index: any = {};
  constructor(private array?: T[]) {
    this.array = this.array || [];

    this.array.forEach(t => {
      this.index[t.uuid] = t;
    });
  }

  all(): T[] { return this.array; }
  fetch(uuid: string): T { return this.index[uuid]; }

  // MUTATORS //
  save(t: T): Repository<T> {
    let index = -1;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].uuid == t.uuid) {
        index = i;
        break;
      }
    }

    if (index < 0) { //update
      throw "cannot update state, uuid not found"
    } else { //insert
      var array = this.array.slice();
      array[index] = t;

      return new Repository<T>(array);
    }
  }
  delete(uuid: string): Repository<T> {
    let index = -1;
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].uuid == uuid) {
        index = i;
        break;
      }
    }

    if (index < 0) { throw "TODO: uuid not found"; }

    return new Repository<T>(
      this.array.slice(0, index).concat(
        this.array.slice(index + 1)));
  }
}
