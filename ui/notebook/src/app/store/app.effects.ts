import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import { ItemFormRef } from '../item-form/item-form-ref'
import { ItemService } from '../service/item.service'
import { EntryService } from '../service/entry.service'
import { MessageService } from '../service/message.service'

import * as AppActions from './app.actions';

const INIT_ACTION_TYPE = '@ngrx/store/init';

@Injectable()
export class AppEffects {

  constructor(
    private itemService: ItemService,
    private entryService: EntryService,
    private messageService: MessageService,
    // TODO: private authService: AuthService,
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
            catchError(error => of(new AppActions.CreateItemError(action.item, "Failed to create item."))),
          )
        ),
      );
  @Effect() CreateItemSuccess: Observable<Action> =
    this.actions$.ofType<AppActions.CreateItemSuccess>(AppActions.CREATE_ITEM_SUCCESS)
      .pipe(
        tap(action => this.messageService.notice(
          "Item \"" + action.item.name + "\" successfully created.")),
        map(() => null),
      );
  @Effect() CreateItemError: Observable<Action> =
    this.actions$.ofType<AppActions.CreateItemError>(AppActions.CREATE_ITEM_ERROR)
      .pipe(
        tap(action => this.messageService.notice(
          "Item could not be created: " + action.error + ".")),
        map(() => null),
      );
  @Effect() UpdateItem: Observable<Action> =
    this.actions$.ofType<AppActions.UpdateItem>(AppActions.UPDATE_ITEM)
      .pipe(
        mergeMap(action =>
          this.itemService.updateItem(action.item).pipe(
            tap(() => this.itemFormRef.closeDialog()), // close the dialog
            map(item => new AppActions.UpdateItemSuccess(item)),
            tap(item => action.onSuccess(action.item)),
            catchError(() => of(new AppActions.UpdateItemError(action.item, "Failed to update item."))),
          )
        ),
      );
  @Effect() UpdateItemSuccess: Observable<Action> =
    this.actions$.ofType<AppActions.UpdateItemSuccess>(AppActions.UPDATE_ITEM_SUCCESS)
      .pipe(
        tap(action => this.messageService.notice(
          "Item \"" + action.item.name + "\" successfully updated.")),
        map(() => null),
      );
  @Effect() UpdateItemError: Observable<Action> =
    this.actions$.ofType<AppActions.UpdateItemError>(AppActions.UPDATE_ITEM_ERROR)
      .pipe(
        tap(action => this.messageService.notice(
          "Item could not be updated: " + action.error + ".")),
        map(() => null),
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
  @Effect() CreateEntrySuccess: Observable<Action> =
    this.actions$.ofType<AppActions.CreateEntrySuccess>(AppActions.CREATE_ENTRY_SUCCESS)
      .pipe(
        tap(action => this.messageService.notice(
          "Entry \"" + action.entry.moment + "\" successfully created.")),
        map(() => null),
      );
  @Effect() CreateEntryError: Observable<Action> =
    this.actions$.ofType<AppActions.CreateEntryError>(AppActions.CREATE_ENTRY_ERROR)
      .pipe(
        tap(action => this.messageService.notice(
          "Entry could not be created: " + action.error + ".")),
        map(() => null),
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
  @Effect() UpdateEntrySuccess: Observable<Action> =
    this.actions$.ofType<AppActions.UpdateEntrySuccess>(AppActions.UPDATE_ENTRY_SUCCESS)
      .pipe(
        tap(action => this.messageService.notice(
          "Entry \"" + action.entry.moment + "\" successfully updated.")),
        map(() => null),
      );
  @Effect() UpdateEntryError: Observable<Action> =
    this.actions$.ofType<AppActions.UpdateEntryError>(AppActions.UPDATE_ENTRY_ERROR)
      .pipe(
        tap(action => this.messageService.notice(
          "Entry could not be updated: " + action.error + ".")),
        map(() => null),
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
  @Effect() DeleteEntrySuccess: Observable<Action> =
    this.actions$.ofType<AppActions.DeleteEntrySuccess>(AppActions.DELETE_ENTRY_SUCCESS)
      .pipe(
        tap(action => this.messageService.notice(
          "Entry \"" + action.entry.moment + "\" successfully deleted.")),
        map(() => null),
      );
  @Effect() DeleteEntryError: Observable<Action> =
    this.actions$.ofType<AppActions.DeleteEntryError>(AppActions.DELETE_ENTRY_ERROR)
      .pipe(
        tap(action => this.messageService.notice(
          "Entry could not be deleted: " + action.error + ".")),
        map(() => null),
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
  @Effect() DeleteItemSuccess: Observable<Action> =
    this.actions$.ofType<AppActions.DeleteItemSuccess>(AppActions.DELETE_ITEM_SUCCESS)
      .pipe(
        tap(action => this.messageService.notice(
          "ITem \"" + action.item.name + "\" successfully deleted.")),
        map(() => null),
      );
  @Effect() DeleteItemError: Observable<Action> =
    this.actions$.ofType<AppActions.DeleteItemError>(AppActions.DELETE_ITEM_ERROR)
      .pipe(
        tap(action => this.messageService.notice(
          "Item could not be deleted: " + action.error + ".")),
        map(() => null),
      );
}
