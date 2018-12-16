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

export const CREATE_ENTRY = '[App] CREATE_ENTRY';
export const CREATE_ENTRY_SUCCESS = "[App] CREATE_ENTRY_SUCCESS";
export const CREATE_ENTRY_ERROR = "[App] CREATE_ENTRY_ERROR";

export const UPDATE_ENTRY = '[App] UPDATE_ENTRY';
export const UPDATE_ENTRY_SUCCESS = "[App] UPDATE_ENTRY_SUCCESS";
export const UPDATE_ENTRY_ERROR = "[App] UPDATE_ENTRY_ERROR";

export const SAVE_ITEM = '[App] SAVE_ITEM';
export const SAVE_ITEM_SUCCESS = "[App] SAVE_ITEM_SUCCESS";
export const SAVE_ITEM_ERROR = "[App] SAVE_ITEM_ERROR";

export const CREATE_ITEM = '[App] CREATE_ITEM';
export const CREATE_ITEM_SUCCESS = "[App] CREATE_ITEM_SUCCESS";
export const CREATE_ITEM_ERROR = "[App] CREATE_ITEM_ERROR";

export const UPDATE_ITEM = '[App] UPDATE_ITEM';
export const UPDATE_ITEM_SUCCESS = "[App] UPDATE_ITEM_SUCCESS";
export const UPDATE_ITEM_ERROR = "[App] UPDATE_ITEM_ERROR";

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
export const DISPLAY_ITEM_FORM_DIALOG = '[App] DISPLAY_ITEM_FORM_DIALOG';

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

// create an entry
export class CreateEntry implements Action {
  readonly type = CREATE_ENTRY;
  constructor(public entry: Entry) { }
}
export class CreateEntrySuccess implements Action {
  readonly type = CREATE_ENTRY_SUCCESS;
  // the uuid of the EntryForm to be updated may not match the entry.
  // e.g. for a new entry, uuid="", but entry has a uuid now.
  constructor(public uuid: string, public entry: Entry) { }
}
export class CreateEntryError implements Action {
  readonly type = CREATE_ENTRY_ERROR;
  constructor(public entry: Entry, public error: string) { }
}

// save an entry
export class UpdateEntry implements Action {
  readonly type = UPDATE_ENTRY;
  constructor(public entry: Entry) { }
}
export class UpdateEntrySuccess implements Action {
  readonly type = UPDATE_ENTRY_SUCCESS;
  // the uuid of the EntryForm to be updated may not match the entry.
  // e.g. for a new entry, uuid="", but entry has a uuid now.
  constructor(public uuid: string, public entry: Entry) { }
}
export class UpdateEntryError implements Action {
  readonly type = UPDATE_ENTRY_ERROR;
  constructor(public entry: Entry, public error: string) { }
}

// create an item
export class CreateItem implements Action {
  readonly type = CREATE_ITEM;
  constructor(public item: Item, public onSuccess: (item: Item) => any) { }
}
export class CreateItemSuccess implements Action {
  readonly type = CREATE_ITEM_SUCCESS;
  constructor(public item: Item) { }
}
export class CreateItemError implements Action {
  readonly type = CREATE_ITEM_ERROR;
  constructor(public item: Item, public error: string) { }
}

// update an item
export class UpdateItem implements Action {
  readonly type = UPDATE_ITEM;
  constructor(public item: Item, public onSuccess: (item: Item) => any) { }
}
export class UpdateItemSuccess implements Action {
  readonly type = UPDATE_ITEM_SUCCESS;
  constructor(public item: Item) { }
}
export class UpdateItemError implements Action {
  readonly type = UPDATE_ITEM_ERROR;
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
// stop editing a new item
export class CancelItem implements Action {
  readonly type = CANCEL_ITEM;
}

export type AppAction = GetEntries | GetEntriesSuccess | GetEntriesError | GetItems |
  GetItemsSuccess | GetItemsError | CreateEntry | CreateEntrySuccess | CreateEntryError |
  UpdateEntry | UpdateEntrySuccess | UpdateEntryError | CreateItem | CreateItemSuccess |
  CreateItemError | UpdateItem | UpdateItemSuccess | UpdateItemError | DeleteEntry |
  DeleteEntrySuccess | DeleteEntryError | DeleteItem | DeleteItemSuccess | DeleteItemError |
  NewEntry | EditEntry | CancelEntry | CancelItem;
