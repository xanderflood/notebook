import { Component, OnInit } from '@angular/core';
import { EntryService } from './entry.service';

import { Entry } from './entry';
import { Transaction, TransactionType } from './transaction'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entries: Entry[];
  title = 'Notebook';

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.getEntries();
  }

  getEntries(): void {
    this.entryService.getEntries()
    .subscribe(entries => this.entries = entries);
  }

  // addEntry(): void {/* TODO */}
}
