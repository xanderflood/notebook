import { Component, EventEmitter, Output, Input, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';

import { ItemPropertiesFormComponent } from '../item-properties-form/item-properties-form.component';

import { AppState } from '../store/app.state'
import { CancelItem, CreateItem, UpdateItem } from '../store/app.actions'
import { Item, ItemProperty } from '../models/item.model';

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss']
})
export class ItemFormComponent implements OnInit {
  //TODO: make this compatible with editing
  @ViewChild(ItemPropertiesFormComponent)
  propertiesForm: ItemPropertiesFormComponent;

  @Output()
  done = new EventEmitter<void>();

  @Input()
  name: string;
  @Input()
  item: Item;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    if (this.item) {
      this.item = Item.copy(this.item);
      this.name = this.item.name;
    } else {
      this.item = new Item();
    }
  }

  dispatchCancel() {
    this.done.emit();
    this.store.dispatch(new CancelItem());
  }

  dispatchSave() {
    this.done.emit();

    this.item.name = name;
    this.item.properties = this.propertiesForm.properties;
    this.store.dispatch(this.item.uuid ?
      new CreateItem(this.item, this.done.emit) :
      new UpdateItem(this.item, this.done.emit));
  }
}
