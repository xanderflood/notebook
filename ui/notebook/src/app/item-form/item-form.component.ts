import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../store/app.state'
import { CancelItem, SaveItem } from '../store/app.actions'
import { Item, ItemProperty } from '../models/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent {
  //TODO: make this compatible with editing

  properties: ItemProperty[] = [];

  @Output()
  done = new EventEmitter();

  @Input()
  name: string;
  @Input()
  item: Item;

  constructor(private store: Store<AppState>) { }

  dispatchCancel() {
    this.done.emit();
    this.store.dispatch(new CancelItem());
  }

  dispatchSave() {
    this.done.emit();
    this.store.dispatch(new SaveItem(new Item(
      "", this.name, 0, 0, this.properties)));
  }
}
