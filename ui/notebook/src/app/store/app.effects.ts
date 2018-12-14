import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { MatDialog } from '@angular/material';

import { ItemService } from '../service/item.service'
import { EntryService } from '../service/entry.service'

import * as AppActions from './app.actions';
import { ItemFormDialog } from '../item-form-dialog/item-form-dialog.component'

const INIT_ACTION_TYPE = '@ngrx/store/init';

@Injectable()
export class AppEffects {

  constructor(
    private itemService: ItemService,
    private entryService: EntryService,
    private actions$: Actions,
    private itemFormDialog: MatDialog,
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

  // SAVE //
  @Effect() CreateEntry: Observable<Action> =
    this.actions$.ofType<AppActions.CreateEntry>(AppActions.CREATE_ENTRY)
      .pipe(
        mergeMap(action =>
          this.entryService.createEntry(action.entry).pipe(
            map(entry => new AppActions.UpdateEntrySuccess(action.entry.uuid, entry)),
            catchError(() => of(new AppActions.UpdateEntryError(action.entry, "Failed to create entry."))),
          )
        ),
      );
  @Effect() CreateItem: Observable<Action> =
    this.actions$.ofType<AppActions.CreateItem>(AppActions.CREATE_ITEM)
      .pipe(
        mergeMap(action =>
          this.itemService.createItem(action.item).pipe(
            tap(action.closeHook), // close the dialog
            map(item => new AppActions.CreateItemSuccess(item)),
            catchError(() => of(new AppActions.CreateItemError(action.item, "Failed to create item."))),
          )
        ),
      );

  // UPDATE //
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
  @Effect() UpdateItem: Observable<Action> =
    this.actions$.ofType<AppActions.UpdateItem>(AppActions.UPDATE_ITEM)
      .pipe(
        mergeMap(action =>
          this.itemService.updateItem(action.item).pipe(
            tap(action.closeHook), // close the dialog
            map(item => new AppActions.UpdateItemSuccess(item)),
            catchError(() => of(new AppActions.UpdateItemError(action.item, "Failed to update item."))),
          )
        ),
      );

  // ITEM FORM DIALOG //
  @Effect() NewItem: Observable<Action> =
    this.actions$.ofType<AppActions.NewItem>(AppActions.NEW_ITEM)
      .pipe(
        mergeMap(action => [new AppActions.DisplayItemFormDialog(
          new AppActions.ItemFormDialogData(action.text))]),
      );
  @Effect() EditItem: Observable<Action> =
    this.actions$.ofType<AppActions.EditItem>(AppActions.EDIT_ITEM)
      .pipe(
        mergeMap(action =>[new AppActions.DisplayItemFormDialog(
          new AppActions.ItemFormDialogData("", action.item))]),
      );
  @Effect() DisplayItemFormDialog: Observable<Action> =
    this.actions$.ofType<AppActions.DisplayItemFormDialog>(AppActions.DISPLAY_ITEM_FORM_DIALOG)
      .pipe<AppActions.DisplayItemFormDialog>(
        tap(action => this.itemFormDialog.open(ItemFormDialog,
            {
              width: '50vw',
              maxWidth: '400px',
              minWidth: '350px',
              data: action.data,
            })
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
