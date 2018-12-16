import { Component, EventEmitter, Output, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';

import { ItemPropertiesFormComponent } from '../item-properties-form/item-properties-form.component';

import { AppState } from '../store/app.state'
import { getItemFormLoading, getItemFormError } from '../store/app.selectors'
import { CancelItem, CreateItem, UpdateItem } from '../store/app.actions'
import { Item, ItemProperty } from '../models/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  @ViewChild(ItemPropertiesFormComponent) propertiesForm: ItemPropertiesFormComponent;

  @Output() success = new EventEmitter<Item>();
  @Output() canceled = new EventEmitter<void>();

  @Input() item: Item;

  loading: Observable<boolean>;
  error: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.loading = store.select(getItemFormLoading)
    this.error = store.select(getItemFormError)
  }

  ngOnInit() {
    if (this.item) {
      this.item = Item.copy(this.item);
    } else {
      this.item = new Item();
    }
  }

  dispatchCancel() {
    this.canceled.emit();
    this.store.dispatch(new CancelItem());
  }

  dispatchSave() {
    this.item.properties = this.propertiesForm.properties;
    this.store.dispatch(this.item.uuid ?
      new UpdateItem(this.item, item => this.success.emit(item)) :
      new CreateItem(this.item, item => this.success.emit(item)));
  }
}
