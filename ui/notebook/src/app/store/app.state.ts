import { Entry } from '../models/entry.model';
import { Item } from '../models/item.model';
import { Repository } from './repository';
import { UUIDable } from '../store/repository'

/////////////////////
// TOP-LEVEL STATE //
/////////////////////
export class AppState {
  constructor(
    public app: EntriesAndItemsManager,
  ) { }

  static default() {
    return new AppState(
      EntriesAndItemsManager.default(),
    );
  }
}

///////////////////
// FEATURE STATE //
///////////////////
export class EntriesAndItemsManager {
  constructor(
    public entries: EntriesData,
    public items: ItemsData,
    public itemForm: ItemFormState, //used for editing _and_ creating
  ) { }

  static default() {
    return new EntriesAndItemsManager(
      EntriesData.default(),
      ItemsData.default(),
      ItemFormState.default(),
    );
  }
}

/////////////
// DETAILS //
/////////////
export class EntriesData {
  constructor(
    // entries are edited in their view, so we need one formstate per entry
    public repository?: Repository<EntryFormState>,
    public loading?: boolean,
    public error?: string,
  ) {
    this.repository = this.repository || new Repository<EntryFormState>();
    this.loading = this.loading || false;
    this.error = this.error || null;
  }

  static default() {
    return new EntriesData();
  }
}

export class ItemsData {
  constructor(
    public repository?: Repository<Item>,
    public loading?: boolean,
    public error?: string,
  ) {
    this.repository = this.repository || new Repository<Item>();
    this.loading = this.loading || false;
    this.error = this.error || null;
  }

  static default() {
    return new ItemsData();
  }
}

export class EntryFormState implements UUIDable {
  get uuid(): string { return this.subject.uuid; }
  set uuid(u: string) { this.subject.uuid = u; }
  constructor(
    public subject?: Entry,
    public editing?: boolean,
    public loading?: boolean,
    public error?: string,
    uuid?: string,
  ) {
    this.subject = this.subject || new Entry();
    this.editing = this.editing || false;
    this.loading = this.loading || false;
    this.error = this.error || null;
    this.uuid = this.uuid || "";
  }

  copy(): UUIDable {
    return new EntryFormState(
      this.subject,
      this.editing,
      this.loading,
      this.error,
      this.uuid);
  }

  static default() {
    return new EntryFormState(null, false);
  }
}

export class ItemFormState {
  constructor(
    public loading?: boolean,
    public error?: string,
  ) {
    this.loading = this.loading || false;
    this.error = this.error || null;
  }

  static default() {
    return new ItemFormState();
  }
}
