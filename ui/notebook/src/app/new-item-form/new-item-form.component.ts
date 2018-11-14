import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-new-item-form',
  templateUrl: './new-item-form.component.html',
  styleUrls: ['./new-item-form.component.scss']
})
export class NewItemFormComponent implements OnInit {
  name: string;
  @Output() closed = new EventEmitter<void | Item>();

  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  cancel() {
    this.closed.emit(null);
  }

  save() {
    //TODO handle errors like name collisions
    this.itemService.create(new Item("", this.name, 0, 0))
      .subscribe(
        success => {
          console.log("HTTP response:", success);
          this.closed.emit(success);
        },
        error => {
          //TODO display error message

          console.log("failed:");
          console.log(error);
          console.log("^that's it");
        });
  }
}
