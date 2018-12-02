import { Component, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-item',
  templateUrl: './item.component.html',
})
export class ItemComponent {
  @Input() href: string;
  @Input() text: string;

  constructor(private router: Router) { }

}
