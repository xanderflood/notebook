import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  //TODO: https://auth0.com/blog/developing-golang-and-angular-apps-part-1-backend-api/

  constructor() { }

  // user uuid: 123e4567-e89b-12d3-a456-426655440000 with signing secret `secret`
  static DefaultToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjNlNDU2Ny1lODliLTEyZDMtYTQ1Ni00MjY2NTU0NDAwMDAifQ.zfCFqiJ6bKBXKU337T3AZ0uhy4VG-9VpD2GhnhghnQk"
  get token(): string { return AuthService.DefaultToken; }
}
