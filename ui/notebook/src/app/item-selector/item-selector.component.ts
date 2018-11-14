import { Component, EventEmitter, OnInit, Input, Output, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ItemService } from '../item.service';
import { FormControl } from '@angular/forms';

import { Observable, Observer } from 'rxjs';
import { map, startWith, merge, combineLatest } from 'rxjs/operators';

import { Item } from '../item';
import { ItemLookup } from '../item-lookup';
import { NewItemFormComponent } from '../new-item-form/new-item-form.component';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent implements OnInit {
  @Input() focused;
  @Input() allowNew;
  @Input() items: Item[] = [];

  selectionValue: Item;
  @Input() get selection(): Item { return this.selectionValue; }
  @Output() selectionChange = new EventEmitter<Item>();
  set selection(item: Item) {
    this.selectionValue = item;
    this.selectionChange.emit(this.selectionValue);
  };

  overlay: boolean = true;
  filteredItems: Observable<Item[]>;
  itemCtrl = new FormControl();

  constructor(
    private itemService: ItemService,
    private itemLookup: ItemLookup,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    //TODO: merge this with:
    // (1) this.itemLookup.items
    // (2) keyup events
    // (3) focus events
    this.filteredItems = this.itemCtrl.valueChanges
      .pipe(
        startWith(""),
        merge(this.itemLookup.items),
        //TODO merge some more signals here
        map(() => this.itemCtrl.value || ""),
        map(q => this.itemLookup.filterItems(q)),
      );
  }

  optionSelected($event: any): void {
    if ($event.option.value) {
      this.selection = $event.option.value;
    } else {
      this.dialog.open(
        NewItemFormDialog,
        { width: '250px' })

        .afterClosed().subscribe(result => {
          if (result) {
            this.selection = result;

            //ask the ItemLookup to get a fresh
            //copy of the item list
            this.itemLookup.refresh();
          }
        });
    }
  }

  itemName(item: Item): string {
    //TODO: why doesn't this work properly?
    if (!item) { return this.itemCtrl ? this.itemCtrl.value : ""; }
    return item.name;
  }
}

@Component({
  selector: 'app-new-item-dialog',
  template: '<app-new-item-form (closed)="close($event)"></app-new-item-form>'
})
export class NewItemFormDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NewItemFormDialog>,
  ) { }

  ngOnInit() {
  }

  close(item: Item): void {
    this.dialogRef.close(item);
  }
}
