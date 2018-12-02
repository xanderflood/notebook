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
    var index = this.findIndex(t.uuid);

    if (index < 0) { //update
      return this.push(t)
    } else { //insert
      return this.replaceIndex(index, t);
    }
  }
  update(uuid: string, update: any): Repository<T> {
    var index = this.findIndex(uuid);

    if (index < 0) {
      //if this method is used to insert something new, then update had
      //better be a genuine and complete T object
      return this.push(update as T)
    } else {
      var obj = {};
      Object.assign(obj, this.array[index]);
      Object.assign(obj, update);
      return this.replaceIndex(index, obj as T);
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

  private findIndex(uuid: string): number {
    for (let i = 0; i < this.array.length; i++) {
      if (this.array[i].uuid == uuid) {
        return i;
      }
    }
    return -1;
  }

  private replaceIndex(index: number, t: T): Repository<T> {
      var array = this.array.slice();
      array[index] = t;

      return new Repository<T>(array);
  }
  private push(t: T): Repository<T> {
    return new Repository<T>([t].concat(this.array));
  }
}
