import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';

export interface Snack {
  message: string
}

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: Snack) { }
}
