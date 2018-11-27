import { Component, OnInit, Inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { AppState, EntryFormState } from '../store/app.state'
import { getItemFormEditing } from '../store/app.selectors'
import { ItemFormDialogData } from '../store/app.actions'

@Component({
  selector: 'app-new-item-dialog',
  template: '<app-item-form (done)="close()" [name]="data.name" [item]="data.item"></app-item-form>'
})
export class ItemFormDialog {
  constructor(
    private dialogRef: MatDialogRef<ItemFormDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ItemFormDialogData,
  ) { }

  close() { this.dialogRef.close(); }
}
