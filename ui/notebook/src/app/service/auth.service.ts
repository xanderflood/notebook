import { Injectable } from '@angular/core';

import { options } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  //TODO: https://auth0.com/blog/developing-golang-and-angular-apps-part-1-backend-api/
  tokenVal: string

  constructor() {
    if (options.token) {
      this.tokenVal = options.token;
    }
  }

  login(username: string, password: string) { /* TODO */ }

  refresh() { /* TODO */ }

  get token(): string { return this.tokenVal; }
}
