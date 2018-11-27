import { Component, Input, OnInit } from '@angular/core';

import { ItemProperty } from '../models/item.model'

@Component({
  selector: 'app-item-properties',
  templateUrl: './item-properties.component.html',
  styleUrls: ['./item-properties.component.scss']
})
export class ItemPropertiesComponent implements OnInit {
  @Input() properties: ItemProperty[];

  constructor() { }

  ngOnInit() {
  }

}
