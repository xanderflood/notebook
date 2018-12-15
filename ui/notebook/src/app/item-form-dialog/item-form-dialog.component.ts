import { Component, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { Item } from '../models/item.model';
import { AppState, EntryFormState } from '../store/app.state'

export class ItemFormDialogData {
  constructor(
    public name: string,
    public item?: Item,
  ) { }
}

@Component({
  selector: 'app-new-item-dialog',
  template: '<app-item-form (canceled)="close()" [name]="data.name" [item]="data.item"></app-item-form>'
})
export class ItemFormDialog {
  constructor(
    private dialogRef: MatDialogRef<ItemFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ItemFormDialogData,
  ) { }

  close() { this.dialogRef.close(); }
}
