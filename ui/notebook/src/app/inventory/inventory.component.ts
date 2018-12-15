import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.state';
import { DeleteItem } from '../store/app.actions';
import { getItemsArray } from '../store/app.selectors';

import { Item } from '../models/item.model';
import { ItemFormDialogData } from '../item-form-dialog/item-form-dialog.component'
import { ItemFormRef } from '../item-form/item-form-ref'

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'number', 'numberTotal', 'lastUsed', 'editButton', 'deleteButton'];

  items: Observable<Item[]> = this.store.select(getItemsArray);

  constructor(
    private store: Store<AppState>,
    private itemFormRef: ItemFormRef,
  ) { }

  ngOnInit() { }

  dispatchEditItem(item: Item) {
    this.itemFormRef.showDialog(new ItemFormDialogData("", item));
  }

  dispatchDeleteItem(item: Item) {
    // TODO prompt
    this.store.dispatch(new DeleteItem(item));
  }
}
