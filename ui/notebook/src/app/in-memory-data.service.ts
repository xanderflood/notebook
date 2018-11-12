import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Transaction, TransactionType } from './transaction'
import { Entry } from './entry';
import { Item } from './item';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    var boroDish = new Item("item-0", "borosilicate dish, 60mm", 10, 5);
    var pp5Dish = new Item("item-1", "PP5 dish, 45mm", 10, 6);
    var hwfpJar = new Item("item-2", "HWFP jar, 1 qt", 10, 8);
    var no17LC = new Item("item-3", "#17 LC", 10, 6);
    var no17HWFP = new Item("item-4", "#17 HWFP jar, 1 qt", 72, 12);
    const items = [boroDish, pp5Dish, hwfpJar, no17LC, no17HWFP];

    const entries = [
      new Entry([
        new Transaction(hwfpJar, TransactionType.Consumed, 10),
        new Transaction(no17LC, TransactionType.Consumed, 1),
        new Transaction(no17HWFP, TransactionType.Produced, 10),
      ]),
      new Entry([
        new Transaction(boroDish, TransactionType.Produced, 40),
        new Transaction(pp5Dish, TransactionType.Produced, 40)
      ])
    ];

    return {
      entries: entries,
      items: items,
    };
  }
}
