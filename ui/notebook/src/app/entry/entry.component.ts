import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'
import { combineLatest, startWith, tap } from 'rxjs/operators'

import { MatDatepickerInputEvent } from '@angular/material/datepicker';

import { AppState, EntryFormState } from '../store/app.state'
import { getEntryFormStateEditing, getEntryFormStateLoading, getEntryFormStateSubject, getEntryFormStateError } from '../store/app.selectors'
import { EditEntry, CancelEntry, CreateEntry, UpdateEntry } from '../store/app.actions'

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
  storedSubject: Entry;

  formDate: Date;
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

    var eAugmented = this.editing.pipe(startWith(false));
    this.subjectObs.pipe(
      combineLatest(eAugmented, (s, e) => ({s: s, e: e})),
    ).subscribe(data => {
      if (data.s) this.storedSubject = Entry.copy(data.s);

      if (data.e) {
        this.formDate = this.storedSubject.moment;
        this.formHours = this.storedSubject.moment.getHours();
        this.formMinutes = this.storedSubject.moment.getMinutes();
        this.gridListAspectRatio = '1:1';
      } else {
        this.subject = this.storedSubject;
        this.gridListAspectRatio = '3:1';
      }
    });
  }

  setDate(date: MatDatepickerInputEvent<Date>) {
    this.formDate = date.value;
  }

  dispatchEdit() {
    this.store.dispatch(new EditEntry(this.subject));
  }

  dispatchCancel() {
    this.store.dispatch(new CancelEntry(this.subject));
  }

  dispatchSave() {
    this.subject.moment = new Date(
      this.formDate.getFullYear(),
      this.formDate.getMonth(),
      this.formDate.getDate(),
      this.formHours,
      this.formMinutes,
    );

    this.store.dispatch(
      this.subject.uuid ?
      new UpdateEntry(this.subject) :
      new CreateEntry(this.subject));
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
