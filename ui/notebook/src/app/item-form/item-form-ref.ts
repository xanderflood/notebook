import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ItemFormDialog, ItemFormDialogData } from '../item-form-dialog/item-form-dialog.component'

@Injectable({ providedIn: 'root' })
export class ItemFormRef {
  constructor(private itemFormDialog: MatDialog) { }

  showDialog(data: ItemFormDialogData) {
    this.itemFormDialog.open(ItemFormDialog, {
      width: '50vw',
      maxWidth: '400px',
      minWidth: '350px',
      restoreFocus: false,
      data: data,
    });
  }

  closeDialog() {
    this.itemFormDialog.closeAll();
  }
}
