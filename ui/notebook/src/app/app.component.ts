import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap, combineLatest } from 'rxjs/operators';
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

  showNew: Observable<boolean>;

  constructor(
    private store: Store<AppState>,
    private router: Router,
  ) { }

  ngOnInit() {
    this.showNew = this.store.select(getEntryFormState(""))
    .pipe(
      combineLatest(
        this.router.events,
        (formState, _) => !formState && (this.router.url == '/log'),
      ),
    );

    this.store.dispatch(new GetItems());
    this.store.dispatch(new GetEntries());
  }

  dispatchNew() {
    this.store.dispatch(new NewEntry());
  }

}
