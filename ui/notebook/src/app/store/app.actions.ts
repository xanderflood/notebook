import { Action } from '@ngrx/store';

import { AppState } from './app.state';
import { Entry } from '../models/entry.model';
import { Item } from '../models/item.model';

// HTTP ACTIONS //
export const GET_ENTRIES = '[App] GET_ENTRIES';
export const GET_ENTRIES_SUCCESS = "[App] GET_ENTRIES_SUCCESS";
export const GET_ENTRIES_ERROR = "[App] GET_ENTRIES_ERROR";

export const GET_ITEMS = '[App] GET_ITEMS';
export const GET_ITEMS_SUCCESS = "[App] GET_ITEMS_SUCCESS";
export const GET_ITEMS_ERROR = "[App] GET_ITEMS_ERROR";

export const SAVE_ENTRY = '[App] SAVE_ENTRY';
export const SAVE_ENTRY_SUCCESS = "[App] SAVE_ENTRY_SUCCESS";
export const SAVE_ENTRY_ERROR = "[App] SAVE_ENTRY_ERROR";

export const SAVE_ITEM = '[App] SAVE_ITEM';
export const SAVE_ITEM_SUCCESS = "[App] SAVE_ITEM_SUCCESS";
export const SAVE_ITEM_ERROR = "[App] SAVE_ITEM_ERROR";

export const DELETE_ENTRY = '[App] DELETE_ENTRY';
export const DELETE_ENTRY_SUCCESS = "[App] DELETE_ENTRY_SUCCESS";
export const DELETE_ENTRY_ERROR = "[App] DELETE_ENTRY_ERROR";

export const DELETE_ITEM = '[App] DELETE_ITEM';
export const DELETE_ITEM_SUCCESS = "[App] DELETE_ITEM_SUCCESS";
export const DELETE_ITEM_ERROR = "[App] DELETE_ITEM_ERROR";

// UI ACTIONS //
export const NEW_ENTRY = '[App] NEW_ENTRY';
export const EDIT_ENTRY = '[App] EDIT_ENTRY';
export const CANCEL_ENTRY = '[App] CANCEL_ENTRY';

export const NEW_ITEM = '[App] NEW_ITEM';
export const EDIT_ITEM = '[App] EDIT_ITEM';
export const CANCEL_ITEM = '[App] CANCEL_ITEM';

export class ItemFormDialogData {
  constructor(
    public name: string,
    public item?: Item) { }
}

export interface ItemFormDialogable {
  toItemFormDialogData(): ItemFormDialogData;
}

// load the full entries index
export class GetEntries implements Action {
  readonly type = GET_ENTRIES;
}
export class GetEntriesSuccess implements Action {
  readonly type = GET_ENTRIES_SUCCESS;
  constructor(public entries: Entry[]) { }
}
export class GetEntriesError implements Action {
  readonly type = GET_ENTRIES_ERROR;
  constructor(public error: string) { }
}

// load the full items index
export class GetItems implements Action {
  readonly type = GET_ITEMS;
}
export class GetItemsSuccess implements Action {
  readonly type = GET_ITEMS_SUCCESS;
  constructor(public items: Item[]) { }
}
export class GetItemsError implements Action {
  readonly type = GET_ITEMS_ERROR;
  constructor(public error: string) { }
}

// save an entry. if entry.uuid is set, update. otherwise, create
export class SaveEntry implements Action {
  readonly type = SAVE_ENTRY;
  constructor(public entry: Entry) { }
}
export class SaveEntrySuccess implements Action {
  readonly type = SAVE_ENTRY_SUCCESS;
  constructor(public entry: Entry) { }
}
export class SaveEntryError implements Action {
  readonly type = SAVE_ENTRY_ERROR;
  constructor(public entry: Entry, public error: string) { }
}

// save an item. if item.uuid is set, update. otherwise, create
export class SaveItem implements Action {
  readonly type = SAVE_ITEM;
  constructor(public item: Item) { }
}
export class SaveItemSuccess implements Action {
  readonly type = SAVE_ITEM_SUCCESS;
  constructor(public item: Item) { }
}
export class SaveItemError implements Action {
  readonly type = SAVE_ITEM_ERROR;
  constructor(public item: Item, public error: string) { }
}

// delete an entry
export class DeleteEntry implements Action {
  readonly type = DELETE_ENTRY;
  constructor(public entry: Entry) { }
}
export class DeleteEntrySuccess implements Action {
  readonly type = DELETE_ENTRY_SUCCESS;
  constructor(public entry: Entry) { }
}
export class DeleteEntryError implements Action {
  readonly type = DELETE_ENTRY_ERROR;
  constructor(public entry: Entry, public error: string) { }
}

// delete an item
export class DeleteItem implements Action {
  readonly type = DELETE_ITEM;
  constructor(public item: Item) { }
}
export class DeleteItemSuccess implements Action {
  readonly type = DELETE_ITEM_SUCCESS;
  constructor(public item: Item) { }
}
export class DeleteItemError implements Action {
  readonly type = DELETE_ITEM_ERROR;
  constructor(public item: Item, public error: string) { }
}

// start editing a new entry
export class NewEntry implements Action {
  readonly type = NEW_ENTRY;
}
// start editing a new item
export class EditEntry implements Action {
  readonly type = EDIT_ENTRY;
  constructor(public entry: Entry) { }
}
// stop editing a new entry
export class CancelEntry implements Action {
  readonly type = CANCEL_ENTRY;
  constructor(public entry: Entry) { }
}
// start editing a new item
export class NewItem implements Action, ItemFormDialogable {
  readonly type = NEW_ITEM;
  constructor(public text: string) { }
  toItemFormDialogData(): ItemFormDialogData {
    return new ItemFormDialogData(this.text);
  };
}
// stop editing a new item
export class EditItem implements Action, ItemFormDialogable {
  readonly type = EDIT_ITEM;
  constructor(public text: string, public item?: Item) { }
  toItemFormDialogData(): ItemFormDialogData {
    return new ItemFormDialogData(this.text, this.item);
  };
}
// stop editing a new item
export class CancelItem implements Action {
  readonly type = CANCEL_ITEM;
}

export type AppAction = GetEntries | GetEntriesSuccess | GetEntriesError | GetItems |
  GetItemsSuccess | GetItemsError | SaveEntry | SaveEntrySuccess | SaveEntryError |
  SaveItem | SaveItemSuccess | SaveItemError | DeleteEntry | DeleteEntrySuccess |
  DeleteEntryError | DeleteItem | DeleteItemSuccess | DeleteItemError | NewEntry |
  EditEntry | CancelEntry | NewItem | EditItem | CancelItem;
