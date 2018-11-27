import { Component, EventEmitter, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { startWith, combineLatest, tap } from 'rxjs/operators';

import { AppState } from '../store/app.state'
import { NewItem } from '../store/app.actions'
import { getItemsRepository } from '../store/app.selectors'
import { Repository } from '../store/repository';

import { Item } from '../models/item.model';

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent implements OnInit {
  @Input() allowNew;

  uuidValue: string | null = null;
  @Input() get uuid(): string | null { return this.uuidValue; }
  @Output() uuidChange = new EventEmitter<string | null>();
  uuidSubject = new Subject<string | null>();
  set uuid(uuid: string | null) {
    this.uuidValue = uuid;
    this.uuidChange.emit(this.uuidValue);
    this.uuidSubject.next(this.uuidValue);
  };

  itemsRepository: Observable<Repository<Item>> = this.store.select(getItemsRepository);
  filteredItems: Observable<Item[]>;
  selectedItem: Item;

  @ViewChild('querybox') queryBox: ElementRef;
  queryCtrl = new FormControl();
  uuidCtrl = new FormControl();

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.uuidSubject.pipe(
      startWith(null),
      combineLatest(this.itemsRepository, (uuid, repo) => uuid ? repo.fetch(uuid) : null),
    ).subscribe(item => this.selectedItem = item);

    this.filteredItems = this.queryCtrl.valueChanges.pipe(
      startWith(""),
      tap(value => { if (this.storingText) this.textOnNewClick = value; }),
      combineLatest(this.itemsRepository, this.filterItems),
    );
  }

  optionSelected($event: any): void {
    if ($event.option.value) {
      this.uuid = $event.option.value.uuid;
    } else {
      this.store.dispatch(new NewItem(this.textOnNewClick));
      this.startStoringText()
    }
  }

  //by the time optionSelected is called, angular-mat has already
  //overwritten the value in the textbox, so we need to store it
  private textOnNewClick: string = "";
  private storingText: boolean = true;
  startStoringText() {
    this.storingText = true;
  }
  stopStoringText() {
    this.storingText = false;
  }

  itemName(item: Item): string {
    if (!item) { return this.queryCtrl ? this.queryCtrl.value : ""; }
    return item.name;
  }

  filterItems(q: string, repo: Repository<Item>): Item[] {
    //TODO fuzzy matching
    if (q.length == 0) return repo.all();
    return repo.all().filter(item =>
      item.name.toLowerCase().indexOf(q) === 0);
  }

  overlayIsVisible(): boolean {
    return (this.queryBox.nativeElement !== this.queryBox.nativeElement.ownerDocument.activeElement)
      && this.itemSelected();
  }

  itemSelected(): boolean {
    return !!this.selectedItem;
  }
}
