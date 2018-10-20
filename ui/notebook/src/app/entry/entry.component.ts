import { Component, OnInit, Input } from '@angular/core';

import { Entry } from '../entry';
import { Transaction } from '../transaction';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry;
  @Input() expanded: boolean;

  constructor() { }

  ngOnInit() {
  }
}
