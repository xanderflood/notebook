import { Component, EventEmitter, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormControl } from '@angular/forms';

import { Observable, Subject, Subscriber } from 'rxjs';
import { startWith, combineLatest, tap, map, share, filter } from 'rxjs/operators';

import { AppState } from '../store/app.state'
import { getItemsRepository } from '../store/app.selectors'
import { Repository } from '../store/repository';

import { Item } from '../models/item.model';
import { ItemFormRef } from '../item-form/item-form-ref'
import { ItemFormDialogData } from '../item-form-dialog/item-form-dialog.component'

@Component({
  selector: 'app-item-selector',
  templateUrl: './item-selector.component.html',
  styleUrls: ['./item-selector.component.scss']
})
export class ItemSelectorComponent implements OnInit {
  @Input() allowNew;

  uuidObs: Observable<string>;
  selectedItem: Item;
  uuidVal: string;
  @Output() uuidChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() get uuid(): string {
    return this.uuidVal;
  }
  set uuid(u: string) {
    this.uuidVal = u;
    this.uuidChange.emit(u);
  }

  itemsRepository: Observable<Repository<Item>> = this.store.select(getItemsRepository);
  filteredItems: Item[];

  @ViewChild('querybox') queryBox: ElementRef;
  queryCtrl = new FormControl();
  uuidCtrl = new FormControl();

  constructor(
    private store: Store<AppState>,
    private itemFormRef: ItemFormRef,
  ) { }

  ngOnInit() {
    var uuidSubscriber: Subscriber<string>;
    this.uuidObs = (Observable.create((subscriber, _) => {
      uuidSubscriber = subscriber;
    }) as Observable<string>).pipe(
      startWith(this.uuid),
      share(),
    );
    this.uuidChange.subscribe(u => uuidSubscriber.next(u));

    this.uuidObs.pipe(
      combineLatest(this.itemsRepository, (uuid, repo) => uuid ? repo.fetch(uuid) : null),
      filter(item => !!item),
    ).subscribe(item => {
      this.selectedItem = item
    });

    var textObs = this.queryCtrl.valueChanges.pipe(
      startWith(""),
      share(),
    );

    textObs.pipe(
      tap(value => { if (this.storingText) this.textOnNewClick = value; }),
      map(value => value ? value : ""), //coerce to string
      combineLatest(this.itemsRepository, this.filterItems),
    ).subscribe(items => this.filteredItems = items);
  }

  optionSelected($event: any): void {
    if ($event.option.value) {
      this.uuid = $event.option.value.uuid;
    } else {
      this.itemFormRef.showDialog(new ItemFormDialogData(
        new Item(this.textOnNewClick),
        item => this.uuid = item.uuid,
      ));
      this.startStoringText();
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

  hideOverlay(): boolean {
    return (this.queryBox.nativeElement === this.queryBox.nativeElement.ownerDocument.activeElement)
      || !this.selectedItem;
  }
}
