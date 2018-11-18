import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item, ItemProperty } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.scss']
})
export class NewItemFormComponent implements OnInit {
  name: string;
  properties: ItemProperty[] = [];
  @Output() closed = new EventEmitter<void | Item>();

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  cancel() {
    this.closed.emit(null);
  }

  save() {
    //TODO handle errors like name collisions
    this.itemService.create(new Item("", this.name, 0, 0, this.properties))
      .subscribe(
        success => {
          this.closed.emit(success);
        },
        error => {
          console.log("TODO: display error message");
        }
      );
  }
}
