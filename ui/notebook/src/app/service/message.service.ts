import { Injectable, Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';

import { SnackComponent } from '../snack/snack.component'
import { options } from '../../environments/environment';


@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: '<span',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
class ErrorSnackComponent {}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
class NoticeSnackComponent {}

@Injectable({ providedIn: 'root' })
export class MessageService {

  constructor(
    private snackBar: MatSnackBar,
  ) { }

  notice(message: string) {
    this.show(message, 'snack-notice');
  }
  error(message: string) {
    this.show(message, 'snack-error');
  }
  private show(message: string, panelClass: string) {
    this.snackBar.openFromComponent(
      SnackComponent,
      {
        duration: 2000,
        data: {message: message},
        panelClass: panelClass,
      },
    );
  }
}
