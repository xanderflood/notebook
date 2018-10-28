import { Component, OnInit, Input } from '@angular/core';
import { EntryService } from '../entry.service';

import { Entry } from '../entry';
import { Transaction, TransactionType } from '../transaction';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry;
  @Input() expanded: boolean;

  @Input() editMode: boolean;
  @Input() formHours: number;
  @Input() formMinutes: number;
  private frozenEntry: Entry;

  constructor(private entryService: EntryService) { }

  ngOnInit() {
  }

  momentString(): string {
    var mString = "AM";
    var hour = this.entry.moment.getHours();
    if (hour > 12) {
      hour -= 12;
      mString = "PM";
    }
    var minute = "" + this.entry.moment.getMinutes();
    if (minute.length < 2) {
      minute = "0" + minute;
    }

    return (this.entry.moment.getMonth() + 1) + '/' +
      this.entry.moment.getDate() + '/' +
      this.entry.moment.getFullYear() + ' ' + 
      hour + ':' + minute + mString;
  }

  startEdit() {
    this.frozenEntry = this.entry;
    this.entry = this.entry.copy();
    this.formHours = this.entry.moment.getHours();
    this.formMinutes = this.entry.moment.getMinutes();
    this.editMode = true;
  }

  cancelEdit() {
    this.entry = this.frozenEntry;
    this.editMode = false;
  }

  persistEdit() {
    this.entry.moment = new Date(
      this.entry.moment.getFullYear(),
      this.entry.moment.getMonth(),
      this.entry.moment.getDate(),
      this.formHours, this.formMinutes);

    //TODO: save and then set this.entry to the returned value
    if (this.entry.uuid.length > 0) {
      // PATCH
      // this.entry = this.entryService.update(this.entry);
    } else {
      // POST
      // this.entry = this.entryService.create(this.entry);
    }

    this.editMode = false;
  }

  delete(transaction: Transaction) {
    this.entry.transactions
      = this.entry.transactions.filter(t => (t != transaction));
  }

  add() {
    this.entry.transactions.push(new Transaction);
  }
}
