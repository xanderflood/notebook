import { Component, ChangeDetectorRef, OnInit, Input, Output } from '@angular/core';
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
  @Input() selection: Item;
  @Input() focused;
  @Input() itemFocused: boolean;
  @Input() items: Item[] = [];

  tbFocused: boolean;
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
          return this.itemCtrl.value ? this._filterItems(this.itemCtrl.value) : this.items.slice()
        })
      );
  }

  setSelection(item: Item) {
    this.selection = item;
    //TODO unfocus the textbox
    //TODO display the description coverup
  }

  itemDisplay(item: Item): string {
    if (!item) { return this.itemCtrl.value; }
    return item.name + " | " + item.numRemaining;
  }

  private _filterItems(value: string): Item[] {
    value = value.toLowerCase();

    //TODO fuzzy search
    return this.items.filter(item => item.name.toLowerCase().indexOf(value) === 0);
  }
}
