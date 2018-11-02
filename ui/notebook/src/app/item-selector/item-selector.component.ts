import { Component, ChangeDetectorRef, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map, startWith, merge } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent implements OnInit {
  @Input() queryText: string;
  @Input() focused;
  @Input() itemFocused: boolean;
  @Input() items: Item[] = [];

  selectionValue: Item;
  @Input() get selection(): Item { return this.selectionValue; }
  @Output() selectionChange = new EventEmitter<Item>();
  set selection(item: Item) {
    this.selectionValue = item;
    this.selectionChange.emit(this.selectionValue);
  };

  overlay: boolean;
  filteredItems: Observable<Item[]>;
  itemCtrl = new FormControl();

  constructor(
    private itemService: ItemService,
    private ref: ChangeDetectorRef
  ) { }

  newItem() {
    console.log("TODO: new item dialog");
  }

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
      obs.next(null);
    });

    //refilter the items after the textbox value
    //changes _or_ the items list is updated
    this.filteredItems =
      refilterObs.pipe(
        startWith(''),
        merge(this.itemCtrl.valueChanges),
        map<void, Item[]>(() => {
          return this.itemCtrl.value ? this._filterItems(this.itemCtrl.value) : this.items.slice();
        })
      );
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
