import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { ItemFormRef } from '../item-form/item-form-ref'
import { ItemService } from '../service/item.service'
import { EntryService } from '../service/entry.service'

import * as AppActions from './app.actions';

const INIT_ACTION_TYPE = '@ngrx/store/init';

@Injectable()
export class AppEffects {

  constructor(
    private itemService: ItemService,
    private entryService: EntryService,
    private itemFormRef: ItemFormRef,
    private actions$: Actions,
  ) { }

  // INITIALIZE //
  @Effect() Initialize: Observable<Action[]> =
    this.actions$.ofType<any>(INIT_ACTION_TYPE)
      .pipe(
        map(() => [new AppActions.GetEntries(), new AppActions.GetItems()]),
      );

  // GET ALL //
  @Effect() GetEntries: Observable<Action> =
    this.actions$.ofType<AppActions.GetEntries>(AppActions.GET_ENTRIES)
      .pipe(
        mergeMap(action =>
          this.entryService.getEntries().pipe(
            map(entries => new AppActions.GetEntriesSuccess(entries)),
            catchError(() => of(new AppActions.GetEntriesError("Failed to fetch entries."))),
          )
        ),
      );
  @Effect() GetItems: Observable<Action> =
    this.actions$.ofType<AppActions.GetItems>(AppActions.GET_ITEMS)
      .pipe(
        mergeMap(action =>
          this.itemService.getItems().pipe(
            map(items => new AppActions.GetItemsSuccess(items)),
            catchError(() => of(new AppActions.GetItemsError("Failed to fetch items."))),
          )
        ),
      );

  // SINGLE ITEM //
  @Effect() CreateItem: Observable<Action> =
    this.actions$.ofType<AppActions.CreateItem>(AppActions.CREATE_ITEM)
      .pipe(
        mergeMap(action =>
          this.itemService.createItem(action.item).pipe(
            tap(() => this.itemFormRef.closeDialog()), // close the dialog
            map(item => new AppActions.CreateItemSuccess(item)),
            tap(item => action.onSuccess(item.item)),
            catchError(() => of(new AppActions.CreateItemError(action.item, "Failed to create item."))),
          )
        ),
      );
  @Effect() UpdateItem: Observable<Action> =
    this.actions$.ofType<AppActions.UpdateItem>(AppActions.UPDATE_ITEM)
      .pipe(
        mergeMap(action =>
          this.itemService.updateItem(action.item).pipe(
            tap(() => this.itemFormRef.closeDialog()), // close the dialog
            map(item => new AppActions.UpdateItemSuccess(item)),
            tap(item => action.onSuccess(item.item)),
            catchError(() => of(new AppActions.UpdateItemError(action.item, "Failed to update item."))),
          )
        ),
      );

  // SINGLE ENTRY //
  @Effect() CreateEntry: Observable<Action> =
    this.actions$.ofType<AppActions.CreateEntry>(AppActions.CREATE_ENTRY)
      .pipe(
        mergeMap(action =>
          this.entryService.createEntry(action.entry).pipe(
            map(entry => new AppActions.CreateEntrySuccess(action.entry.uuid, entry)),
            catchError(() => of(new AppActions.CreateEntryError(action.entry, "Failed to create entry."))),
          )
        ),
      );
  @Effect() UpdateEntry: Observable<Action> =
    this.actions$.ofType<AppActions.UpdateEntry>(AppActions.UPDATE_ENTRY)
      .pipe(
        mergeMap(action =>
          this.entryService.updateEntry(action.entry).pipe(
            map(entry => new AppActions.UpdateEntrySuccess(action.entry.uuid, entry)),
            catchError(() => of(new AppActions.UpdateEntryError(action.entry, "Failed to update entry."))),
          )
        ),
      );

  // DELETE //
  @Effect() DeleteEntry: Observable<Action> =
    this.actions$.ofType<AppActions.DeleteEntry>(AppActions.DELETE_ENTRY)
      .pipe(
        mergeMap(action =>
          this.entryService.deleteEntry(action.entry).pipe(
            map(entry => new AppActions.DeleteEntrySuccess(entry)),
            catchError(() => of(new AppActions.DeleteEntryError(action.entry, "Failed to delete entry."))),
          )
        ),
      );
  @Effect() DeleteItem: Observable<Action> =
    this.actions$.ofType<AppActions.DeleteItem>(AppActions.DELETE_ITEM)
      .pipe(
        mergeMap(action =>
          this.itemService.deleteItem(action.item).pipe(
            map(item => new AppActions.DeleteEntrySuccess(item)),
            catchError(() =>
              of(new AppActions.DeleteEntryError(action.item, "Failed to delete item."))),
          )
        ),
      );
}
