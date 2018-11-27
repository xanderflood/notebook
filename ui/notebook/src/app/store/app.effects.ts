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
  @Effect() SaveEntry: Observable<Action> =
    this.actions$.ofType<AppActions.SaveEntry>(AppActions.SAVE_ENTRY)
      .pipe(
        mergeMap(action =>
          this.entryService.saveEntry(action.entry).pipe(
            map(entry => new AppActions.SaveEntrySuccess(entry)),
            catchError(() => of(new AppActions.SaveEntryError(action.entry, "Failed to save entry."))),
          )
        ),
      );
  @Effect() SaveItem: Observable<Action> =
    this.actions$.ofType<AppActions.SaveItem>(AppActions.SAVE_ITEM)
      .pipe(
        mergeMap(action =>
          this.itemService.saveItem(action.item).pipe(
            map(item => new AppActions.SaveItemSuccess(item)),
            catchError(() => of(new AppActions.SaveItemError(action.item, "Failed to save item."))),
          )
        ),
      );

  // ITEM FORM DIALOG //
  @Effect() NewItem: Observable<Action> =
    this.actions$.ofType<AppActions.NewItem>(AppActions.NEW_ITEM)
      .pipe(
        mergeMap(action => {
          return this.itemFormDialog.open(ItemFormDialog,
            {
              width: '50vw',
              maxWidth: '400px',
              minWidth: '350px',
              data: action.toItemFormDialogData(),
            })
            .afterClosed().pipe(
              map(result => result ? new AppActions.SaveItem(result)
                : new AppActions.CancelItem),
            );
        }),
      );
  @Effect() EditItem: Observable<Action> =
    this.actions$.ofType<AppActions.EditItem>(AppActions.EDIT_ITEM)
      .pipe(
        mergeMap(action => {
          return this.itemFormDialog.open(ItemFormDialog,
            {
              width: '50vw',
              maxWidth: '400px',
              minWidth: '350px',
              data: action.toItemFormDialogData(),
            })
            .afterClosed().pipe(
              map(result => result ? new AppActions.SaveItem(result)
                : new AppActions.CancelItem),
            );
        }),
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
