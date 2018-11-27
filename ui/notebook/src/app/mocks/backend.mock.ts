//adapted from
//http://jasonwatmore.com/post/2018/06/22/angular-6-mock-backend-example-for-backendless-development

import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { Item, ItemProperty } from '../models/item.model';
import { Entry } from '../models/entry.model';
import { Transaction, TransactionType } from '../models/transaction.model'
import { MockDB } from './db.mock';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

  private boroDish = new Item("borosilicate dish, 60mm", "item-0", 10, 5);
  private pp5Dish = new Item("PP5 dish, 45mm", "item-1", 10, 6);
  private hwfpJar = new Item("HWFP jar, 1 qt", "item-2", 10, 8, [
    new ItemProperty("createdat", "02/13/4392 32:21:64"),
  ]);
  private no17LC = new Item("item-3", "#17 LC", 10, 6);
  private no17HWFP = new Item("item-4", "#17 HWFP jar, 1 qt", 72, 12);
  private itemsArray = [this.boroDish, this.pp5Dish, this.hwfpJar, this.no17LC, this.no17HWFP];

  private entriesArray = [
    new Entry([
      new Transaction(this.hwfpJar.uuid, TransactionType.Consumed, 10),
      new Transaction(this.no17LC.uuid, TransactionType.Consumed, 1),
      new Transaction(this.no17HWFP.uuid, TransactionType.Produced, 10),
    ], new Date, "entry1"),
    new Entry([
      new Transaction(this.boroDish.uuid, TransactionType.Produced, 40),
      new Transaction(this.pp5Dish.uuid, TransactionType.Produced, 40)
    ], new Date, "entry2")
  ];

  private items: MockDB<Item> = new MockDB<Item>(this.itemsArray);
  private entries: MockDB<Entry> = new MockDB<Entry>(this.entriesArray);

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered items
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {
      console.log("mocking request:", request.method, request.url, request.body);

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
      if (request.url.endsWith('/api/items') && request.method === 'PUT') {
        // save new item
        let item = this.items.save(request.body);

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
      if (request.url.endsWith('/api/entries') && request.method === 'PUT') {
        // save new entry
        let entry = this.entries.save(request.body);

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

export let mockBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: MockBackendInterceptor,
  multi: true
};
