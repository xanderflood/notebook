import { Component } from '@angular/core';

import { Entry } from './entry';
import { Transaction, TransactionType } from './transaction'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  entry: Entry = {
    uuid: "asdfasdfasd",
    transactions: [
      {
        type: TransactionType.Consumed,
        itemUUID: "asf-df-asfd-2-f2f-sdf",
        count: 6,
        name: ""
      },{
        type: TransactionType.Produced,
        itemUUID: "",
        count: 6,
        name: "Dishes"
      },{
        type: TransactionType.Produced,
        itemUUID: "",
        count: 6,
        name: "Dishes"
      },{
        type: TransactionType.Produced,
        itemUUID: "",
        count: 6,
        name: "Dishes"
      },{
        type: TransactionType.Produced,
        itemUUID: "",
        count: 6,
        name: "Dishes"
      },{
        type: TransactionType.Produced,
        itemUUID: "",
        count: 6,
        name: "Dishes"
      },{
        type: TransactionType.Produced,
        itemUUID: "",
        count: 6,
        name: "Dishes"
      },{
        type: TransactionType.Produced,
        itemUUID: "",
        count: 6,
        name: "Dishes"
      },{
        type: TransactionType.Produced,
        itemUUID: "",
        count: 6,
        name: "Dishes"
      },{
        type: TransactionType.Produced,
        itemUUID: "",
        count: 6,
        name: "Dishes"
      },{
        type: TransactionType.Produced,
        itemUUID: "",
        count: 6,
        name: "Dishes"
      },{
        type: TransactionType.Produced,
        itemUUID: "",
        count: 6,
        name: "Dishes"
      }
    ]
  };
  title = 'Notebook';
}
