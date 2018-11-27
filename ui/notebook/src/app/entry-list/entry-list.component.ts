import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators'

import { AppState } from '../store/app.state'
import { getEntryFormStateEditing, getEntryFormStateLoading, getEntriesArray } from '../store/app.selectors';

import { Entry } from '../models/entry.model';
import * as AppActions from '../store/app.actions';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {
  @Input()
  newEntryFormActive: Observable<boolean> = this.store.select(
    getEntryFormStateEditing(null))
    .pipe(startWith(false));

  @Input()
  newEntryFormLoading: Observable<boolean> = this.store.select(getEntryFormStateLoading(null));

  @Input()
  entries: Observable<Entry[]> = this.store.select(getEntriesArray);

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
