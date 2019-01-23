import { Component, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscriber, Subject, from } from 'rxjs'
import { startWith } from 'rxjs/operators'
import { switchMap, tap, share } from 'rxjs/operators'

import { AppState } from '../store/app.state'
import { getItemData } from '../store/app.selectors'

import { Transaction, TransactionType } from '../models/transaction.model';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input() transaction: Transaction;
  @Input() editMode: boolean;
  @Output() remove: EventEmitter<Transaction> = new EventEmitter<Transaction>();

  private itemUUIDSubscriber: Subscriber<string>;
  itemObs: Observable<Item>;
  item: Item;
  @Input() get itemUUID(): string {
    return this.transaction.itemUUID;
  }
  set itemUUID(u: string) {
    this.transaction.itemUUID = u;
    this.itemUUIDSubscriber.next(u);
  }

  //make these available in the view renderer
  transactionType = TransactionType;
  types = Object.values(TransactionType);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    (Observable.create((subscriber, _) => {
      this.itemUUIDSubscriber = subscriber;
    }) as Observable<string>).pipe(
      startWith(this.transaction.itemUUID),
      tap(u => console.log("ITEM UUID", u)),
      switchMap(uuid => this.store.select(getItemData(uuid))),
    ).subscribe(item => this.item = item);
  }

  uuidChange(uuid: string) {
    this.itemUUID = uuid;
  }
}
