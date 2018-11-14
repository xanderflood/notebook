import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EntryService } from '../entry.service';

import { ItemLookup } from '../item-lookup';
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

  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter<Entry>();

  constructor(
    private entryService: EntryService,
    private itemLookup: ItemLookup,
  ) { }

  ngOnInit() {
    if (this.editMode) { this.startEdit(); }
  }

  get persisted(): boolean {
    return this.entry.uuid ? this.entry.uuid.length > 0 : false;
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
    this.entry = Entry.copy(this.entry);
    this.formHours = this.entry.moment.getHours();
    this.formMinutes = this.entry.moment.getMinutes();
    this.editMode = true;
  }

  cancelEdit() {
    this.entry = this.frozenEntry;
    this.editMode = false;
    this.cancel.emit();
    console.log("cancel signal sent");
  }

  persistEdit() {
    this.entry.moment = new Date(
      this.entry.moment.getFullYear(),
      this.entry.moment.getMonth(),
      this.entry.moment.getDate(),
      this.formHours, this.formMinutes);

    if (this.persisted) {
      // PATCH
      console.log("about to update entry:", this.entry);
      this.entryService.update(this.entry)
        .subscribe(
          success => {
            this.entry = success
            this.editMode = false;
            this.save.emit(success);
          },
          error => console.log("TODO: display error: ", error),
        );
    } else {
      // POST
      console.log("about to create entry:", this.entry);
      this.entryService.create(this.entry)
        .subscribe(
          success => {
            this.entry = success
            this.editMode = false;
            this.save.emit(success);
          },
          error => console.log("TODO: display error: ", error),
        );
    }
  }

  delete(transaction: Transaction) {
    this.entry.transactions
      = this.entry.transactions.filter(t => (t != transaction));
  }

  add() {
    this.entry.transactions.push(new Transaction);
  }
}
