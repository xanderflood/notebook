import { Component, OnInit, Input } from '@angular/core';
import { Transaction, TransactionType } from '../transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input() transaction: Transaction;
  @Input() expanded: boolean;

  transactionType = TransactionType

  constructor() { }

  ngOnInit() {
  }

  description(): string {
    if (this.transaction.type == TransactionType.Produced) {
      return `Produced ${this.transaction.count} of ${this.transaction.name}`
    } else {
      return `Consumed ${this.transaction.count} of ${this.transaction.itemUUID}`
    }
  }

  produced(): void {

  }
}
