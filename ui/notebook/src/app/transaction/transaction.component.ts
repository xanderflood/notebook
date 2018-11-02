import { Component, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Transaction, TransactionType } from '../transaction';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {
  @Input() transaction: Transaction;
  @Input() editMode: boolean;
  @Output() remove: EventEmitter<Transaction> = new EventEmitter<Transaction>();
  @ViewChild('countInput') countInput: ElementRef;
  myNum: number;

  transactionType = TransactionType;
  types = Object.values(TransactionType);

  constructor() { }

  focusCountInput() {
    // this.countInput.nativeElement.focus();
    console.log("we're here!" + this.myNum);
  }

  ngOnInit() {
  }
}
