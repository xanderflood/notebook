import { InMemoryDbService } from 'angular-in-memory-web-api';
import { TransactionType } from './transaction'
import { Entry } from './entry';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const entries = [
      {
        uuid: "11", transactions: [
          {
            type: TransactionType.Consumed,
            itemUUID: "asf-df-asfd-2-f2f-sdf",
            count: 6,
            name: ""
          }, {
            type: TransactionType.Produced,
            itemUUID: "",
            count: 6,
            name: "Dishes"
          }, {
            type: TransactionType.Produced,
            itemUUID: "",
            count: 6,
            name: "Dishes"
          }, {
            type: TransactionType.Produced,
            itemUUID: "",
            count: 6,
            name: "Dishes"
          }
        ]
      },
      {
        uuid: "12", transactions: [
          {
            type: TransactionType.Consumed,
            itemUUID: "asf-df-asfd-2-f2f-sdf",
            count: 6,
            name: ""
          }, {
            type: TransactionType.Produced,
            itemUUID: "",
            count: 6,
            name: "Dishes"
          }
        ]
      }
    ];
    return { entries };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the entries array is empty,
  // the method below returns the initial number (11).
  // if the entries array is not empty, the method below returns the highest
  // hero id + 1.
  // genId(entries: Entry[]): string {
  //   return entries.length > 0 ? Math.max(...entries.map(hero => hero.uuid)) : 11;
  // }
}
