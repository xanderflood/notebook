import { Component } from '@angular/core';

import { Entry } from './entry';
import { Transaction, TransactionType } from './transaction'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  entry: Entry = new Entry([
    new Transaction(null,
      {
        uuid: "asf-df-asfd-2-f2f-sdf",
        name: "dishes",
        numProduced: 89,
        numRemaining: 20,
        history: []
      },
      TransactionType.Consumed, 6),
    new Transaction(null,
      {
        uuid: "",
        name: "dishes",
        numProduced: 89,
        numRemaining: 20,
        history: []
      },
      TransactionType.Produced, 7)
  ]);
  title = 'Notebook';
}
