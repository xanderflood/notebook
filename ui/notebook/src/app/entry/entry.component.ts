import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'
import { combineLatest, startWith, tap } from 'rxjs/operators'

import { AppState, EntryFormState } from '../store/app.state'
import { getEntryFormStateEditing, getEntryFormStateLoading, getEntryFormStateSubject, getEntryFormStateError } from '../store/app.selectors'
import { EditEntry, CancelEntry, SaveEntry } from '../store/app.actions'

import { Entry } from '../models/entry.model';
import { Transaction } from '../models/transaction.model';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() uuid: (string | null) = null;
  @Input() expanded: boolean;

  loading: Observable<boolean>; //TODO disable and spin
  editing: Observable<boolean>;

  subjectObs: Observable<Entry>;
  subject: Entry;
  storeSubject: Entry;

  formHours: number;
  formMinutes: number;

  gridListAspectRatio: string = '1:1';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.editing = this.store.select(getEntryFormStateEditing(this.uuid))
    .pipe(startWith(false));
    this.loading = this.store.select(getEntryFormStateLoading(this.uuid))
    .pipe(startWith(false));
    this.subjectObs = this.store.select(getEntryFormStateSubject(this.uuid));

    this.editing.pipe(
      combineLatest(this.subjectObs, (e, s) => {
        return {
          editing: e,
          subject: s,
        };
      }),
    ).subscribe(data => {
      //update the FE copy and the stored BE copy of this entry
      this.subject = data.subject
      this.storeSubject = data.subject;

      if (data.editing) {
        this.storeSubject = data.subject;
        this.formHours = data.subject.moment.getHours();
        this.formMinutes = data.subject.moment.getMinutes();
        this.gridListAspectRatio = '1:1';
      } else {
        this.subject = Entry.copy(this.storeSubject);
        this.gridListAspectRatio = '3:1';
      }
    });
  }

  dispatchEdit() {
    this.store.dispatch(new EditEntry(this.subject));
  }

  dispatchCancel() {
    this.store.dispatch(new CancelEntry(this.subject));
  }

  dispatchSave() {
    this.subject.moment = new Date(
      this.subject.moment.getFullYear(),
      this.subject.moment.getMonth(),
      this.subject.moment.getDate(),
      this.formHours, this.formMinutes);

    this.store.dispatch(new SaveEntry(this.subject));
  }

  delete(transaction: Transaction) {
    this.subject.transactions
      = this.subject.transactions.filter(t => (t != transaction));
  }

  add() {
    this.subject.transactions.push(new Transaction);
  }

  momentString(): string {
    var mString = "AM";
    var hour = this.subject.moment.getHours();
    if (hour > 12) {
      hour -= 12;
      mString = "PM";
    }
    var minute = "" + this.subject.moment.getMinutes();
    if (minute.length < 2) {
      minute = "0" + minute;
    }

    return (this.subject.moment.getMonth() + 1) + '/' +
      this.subject.moment.getDate() + '/' +
      this.subject.moment.getFullYear() + ' ' +
      hour + ':' + minute + mString;
  }
}
