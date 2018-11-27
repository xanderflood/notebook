import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './store/app.state'
import { NewEntry, GetEntries, GetItems } from './store/app.actions'
import { getEntryFormStateEditing } from './store/app.selectors'
import { Entry } from './models/entry.model';
import { Transaction, TransactionType } from './models/transaction.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Notebook';

  creating: boolean = false;

  constructor(
    private store: Store<AppState>,
  ) {
    this.store.select(getEntryFormStateEditing())
    .subscribe(e => this.creating = e);
  }

  ngOnInit() {
    this.store.dispatch(new GetItems());
    this.store.dispatch(new GetEntries());
  }

  dispatchNew() {
    this.store.dispatch(new NewEntry());
  }

}
