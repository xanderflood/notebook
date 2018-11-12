import { Component, ChangeDetectorRef, EventEmitter, OnInit, Input, Output, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { map, startWith, merge } from 'rxjs/operators';
import { ItemService } from '../item.service';
import { FormControl } from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { Item } from '../item';

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

  queryText: string;
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
    private ref: ChangeDetectorRef,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    //TODO better way to do this?
    //TODO do I need to eventually call obs.complete()?

    //create a channel for HTTP updates to trigger refiltering
    var obs: Observer<any>;
    var refilterObs = Observable.create(function(innerObs: Observer<any>) {
      obs = innerObs;
    })

    //update items from HTTP
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      obs ? obs.next(null) : null;
    });

    //refilter the items after the textbox value
    //changes _or_ the items list is updated
    this.filteredItems =
      refilterObs.pipe(
        startWith(''),
        merge(this.itemCtrl.valueChanges),
        map<void, Item[]>(() => {
          this.queryText = this.itemCtrl.value;
          return this.itemCtrl.value ? this._filterItems(this.itemCtrl.value) : this.items.slice();
        })
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
        console.log('TODO: handling new item return:', result);

        //TODO: handle the error or
        //append newly created item or error
      });
    }
  }

  itemName(item: Item): string {
    if (!item) { return this.itemCtrl ? this.itemCtrl.value : ""; }
    return item.name;
  }

  private _filterItems(value: string): Item[] {
    //if there's already a selection
    if (typeof value == 'object') {
      return [];
    }

    //TODO fuzzy search
    value = value.toLowerCase();
    return this.items.filter(item => item.name.toLowerCase().indexOf(value) === 0);
  }
}

@Component({
  selector: 'app-new-item-dialog',
  template: '<app-new-item-form></app-new-item-form>'
})
export class NewItemFormDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<NewItemFormDialog>) {
    //TOO
  }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
