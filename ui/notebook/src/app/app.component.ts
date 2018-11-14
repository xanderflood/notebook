import { Component, OnInit } from '@angular/core';
import { EntryService } from './entry.service';

import { ItemLookup } from './item-lookup';
import { Entry } from './entry';
import { Transaction, TransactionType } from './transaction'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ItemLookup]
})
export class AppComponent implements OnInit {
  entries: Entry[];
  title = 'Notebook';

  creating: boolean = false;
  unsavedEntry: Entry = new Entry();

  constructor(
    private entryService: EntryService,
    private itemLookup: ItemLookup,
  ) { }

  ngOnInit() {
    this.getEntries();
  }

  getEntries(): void {
    this.entryService.getEntries()
      .subscribe(entries => this.entries = entries);
  }

  newEntry(): void { this.creating = true; }
  newCanceled() { this.creating = false; }

  newSaved(entry: Entry) {
    this.unsavedEntry = new Entry();
    this.creating = false;
    this.entries.splice(0, 1, entry);
  }
}
