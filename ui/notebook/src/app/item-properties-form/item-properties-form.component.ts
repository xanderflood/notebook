import { Component, OnInit, Input, Output } from '@angular/core';

import { ItemProperty } from '../models/item.model'

@Component({
  selector: 'app-item-properties-form',
  templateUrl: './item-properties-form.component.html',
  styleUrls: ['./item-properties-form.component.scss']
})
export class ItemPropertiesFormComponent implements OnInit {

  private propertiesArray: ItemProperty[] = [];
  set properties(ary: ItemProperty[]) {
    this.propertiesArray = ary.slice();
    this.ensureNonempty();
  }
  @Input() get properties(): ItemProperty[] {
    return this.propertiesArray.filter(
      p => (p.name.length > 0) || (p.value.length > 0)).map(
      p => ItemProperty.copy(p));
  }

  constructor() { }

  ngOnInit() {
    this.ensureNonempty();
  }

  addProperty() {
    this.propertiesArray.push(new ItemProperty());
  }

  removeProperty(i: number) {
    this.propertiesArray.splice(i, 1);
    this.ensureNonempty();
  }

  ensureNonempty() {
    if (this.propertiesArray.length == 0)
      this.propertiesArray.push(new ItemProperty());
  }
}
