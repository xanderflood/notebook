import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ItemProperty } from '../item'

@Component({
  selector: 'app-item-properties-form',
  templateUrl: './item-properties-form.component.html',
  styleUrls: ['./item-properties-form.component.scss']
})
export class ItemPropertiesFormComponent implements OnInit {

  private propertiesArray: ItemProperty[] = [];
  @Input() set properties(properties: ItemProperty[]) {
    this.propertiesArray = properties;
    this.ensureNonempty();
  }
  get properties(): ItemProperty[] {
    return this.propertiesArray;
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
    if (this.properties.length == 0)
      this.propertiesArray.push(new ItemProperty());
  }

}
