//adapted from
//http://jasonwatmore.com/post/2018/06/22/angular-6-mock-backend-example-for-backendless-development

import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { Item } from './item';
import { Entry } from './entry';
import { Repository } from './repository';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  private items: Repository<Item> = new Repository<Item>();
  private entries: Repository<Entry> = new Repository<Entry>();

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered items
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {
      // authenticate
      // if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
      //   // find if any user matches login credentials
      //   let filteredUsers = users.filter(user => {
      //     return user.username === request.body.username && user.password === request.body.password;
      //   });

      //   if (filteredUsers.length) {
      //     // if login details are valid return 200 OK with user details and fake jwt token
      //     let user = filteredUsers[0];
      //     let body = {
      //       uuid: user.uuid,
      //       username: user.username,
      //       firstName: user.firstName,
      //       lastName: user.lastName,
      //       token: 'fake-jwt-token'
      //     };

      //     return of(new HttpResponse({ status: 200, body: body }));
      //   } else {
      //     // else return 400 bad request
      //     return throwError({ error: { message: 'Username or password is incorrect' } });
      //   }
      // } //TODO

      // get items
      if (request.url.endsWith('/api/items') && request.method === 'GET') {
        console.log("sending items", this.items.all());
        return of(new HttpResponse({ status: 200, body: this.items.all() }));
      }

      // get item by uuid
      if (request.url.match(/\/api\/items\/[\da-f\-]+$/) && request.method === 'GET') {
        // find item by uuid in items array
        let urlParts = request.url.split('/');
        let uuid = urlParts[urlParts.length - 1];
        let item = this.items.fetch(uuid);

        return of(new HttpResponse({ status: 200, body: item }));
      }

      // create item
      if (request.url.endsWith('/api/items') && request.method === 'POST') {
        // save new item
        let item = this.items.add(request.body);

        // respond 200 OK
        return of(new HttpResponse({ status: 200, body: item }));
      }

      // delete item
      if (request.url.match(/\/items\/[\da-f\-]+$/) && request.method === 'DELETE') {
        // find item by uuid in items array
        let urlParts = request.url.split('/');
        let uuid = urlParts[urlParts.length - 1];
        this.items.delete(uuid);

        // respond 200 OK
        return of(new HttpResponse({ status: 200 }));
      }

      // get entries
      if (request.url.endsWith('/api/entries') && request.method === 'GET') {
        return of(new HttpResponse({ status: 200, body: this.entries.all() }));
      }

      // get entry by uuid
      if (request.url.match(/\/api\/entries\/[\da-f\-]+$/) && request.method === 'GET') {
        // find entry by uuid in entries array
        let urlParts = request.url.split('/');
        let uuid = urlParts[urlParts.length - 1];
        let entry = this.entries.fetch(uuid);

        return of(new HttpResponse({ status: 200, body: entry }));
      }

      // create entry
      if (request.url.endsWith('/api/entries') && request.method === 'POST') {
        // save new entry
        let entry = this.entries.add(request.body);

        // respond 200 OK
        return of(new HttpResponse({ status: 200, body: entry }));
      }

      // delete entry
      if (request.url.match(/\/entries\/[\da-f\-]+$/) && request.method === 'DELETE') {
        // find entry by uuid in entries array
        let urlParts = request.url.split('/');
        let uuid = urlParts[urlParts.length - 1];
        this.entries.delete(uuid);

        // respond 200 OK
        return of(new HttpResponse({ status: 200 }));
      }

      // pass through any requests not handled above
      return next.handle(request);
    }))

      // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());
  }
}

export let fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
