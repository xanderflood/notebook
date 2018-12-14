import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.state';
import { EditItem, DeleteItem } from '../store/app.actions';
import { getItemsArray } from '../store/app.selectors';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {
  displayedColumns: string[] = ['name', 'number', 'numberTotal', 'lastUsed', 'editButton', 'deleteButton'];

  items: Observable<Item[]> = this.store.select(getItemsArray)
  .pipe(tap(items => console.log(items)));

  constructor(private store: Store<AppState>) { }

  ngOnInit() { }

  dispatchEditItem(item: Item) {
    // this.store.dispatch(new EditItem(item));
  }

  dispatchDeleteItem(item: Item) {
    // TODO prompt
    this.store.dispatch(new DeleteItem(item));
  }
}
