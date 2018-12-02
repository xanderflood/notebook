import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AppState } from './store/app.state'
import { NewEntry, GetEntries, GetItems } from './store/app.actions'
import { getEntryFormState } from './store/app.selectors'
import { Entry } from './models/entry.model';
import { Transaction, TransactionType } from './models/transaction.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Notebook';

  showNew: Observable<boolean> = this.store.select(getEntryFormState(""))
    .pipe(map(state => !state));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new GetItems());
    this.store.dispatch(new GetEntries());
  }

  dispatchNew() {
    this.store.dispatch(new NewEntry());
  }

}
