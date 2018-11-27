import { Component, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs'
import { combineLatest, startWith } from 'rxjs/operators'

import { AppState } from '../store/app.state'
import { getItemsRepository } from '../store/app.selectors'

import { Transaction, TransactionType } from '../models/transaction.model';
import { Item } from '../models/item.model';

import { ItemSelectorComponent } from '../item-selector/item-selector.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input() transaction: Transaction;
  @Input() editMode: boolean;
  @Output() remove: EventEmitter<Transaction> = new EventEmitter<Transaction>();

  uuidObs: Subject<string>;
  item: Observable<Item>;

  @ViewChild('itemSelector') itemSelector: ItemSelectorComponent;

  //make these available in the view renderer
  transactionType = TransactionType;
  types = Object.values(TransactionType);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.uuidObs = new Subject<string>();

    this.item = this.uuidObs.pipe(
      startWith(null),
      combineLatest(this.store.select(getItemsRepository),
        (uuid, repo) => uuid ? repo.fetch(uuid) : null),
    );
  }

  changeUUID(uuid: string) {
    this.uuidObs.next();
  }
}
