//adapted from
//http://jasonwatmore.com/post/2018/06/22/angular-6-mock-backend-example-for-backendless-development

import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

import { Item, ItemProperty, ItemType } from '../models/item.model';
import { Entry } from '../models/entry.model';
import { Transaction, TransactionType } from '../models/transaction.model'
import { MockDB } from './db.mock';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {

  private items: MockDB<Item>;
  private entries: MockDB<Entry>;

  constructor() {
    var boroDish = new Item("borosilicate dish, 60mm", "item-0", ItemType.Inventory, 10, 5);
    var pp5Dish = new Item("PP5 dish, 45mm", "item-1", ItemType.Inventory, 10, 6);
    var hwfpJar = new Item("HWFP jar, 1 qt", "item-2", ItemType.Inventory, 10, 8, [
      new ItemProperty("createdat", "02/13/4392 32:21:64"),
    ]);
    var no17LC = new Item("item-3", "#17 LC", ItemType.Unique, 10, 6);
    var no17HWFP = new Item("item-4", "#17 HWFP jar, 1 qt", ItemType.Unique, 72, 12);

    this.items = new MockDB<Item>([boroDish, pp5Dish, hwfpJar, no17LC, no17HWFP]);


    this.entries = new MockDB<Entry>([
      new Entry([
        new Transaction(hwfpJar.uuid, TransactionType.Consumed, 10),
        new Transaction(no17LC.uuid, TransactionType.Consumed, 1),
        new Transaction(no17HWFP.uuid, TransactionType.Produced, 10),
      ], new Date, "entry1"),
      new Entry([
        new Transaction(boroDish.uuid, TransactionType.Produced, 40),
        new Transaction(pp5Dish.uuid, TransactionType.Produced, 40)
      ], new Date, "entry2")
    ]);
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // array in local storage for registered items
    // wrap in delayed observable to simulate server api call
    return of(null).pipe(mergeMap(() => {
      // console.log("mocking request:", request.method, request.url, request.body);

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
        return of(new HttpResponse({ status: 200, body: this.items.all().map(item => Item.copy(item)) }));
      }

      // get item by uuid
      if (request.url.match(/\/api\/items\/[\da-f\-]+$/) && request.method === 'GET') {
        // find item by uuid in items array
        let urlParts = request.url.split('/');
        let uuid = urlParts[urlParts.length - 1];
        let item = this.items.fetch(uuid);

        return of(new HttpResponse({ status: 200, body: Item.fromObject(item) }));
      }

      // create
      if (request.url.endsWith('/api/items') && request.method === 'POST') {
        // save new item
        let items = this.items.insert(Item.fromObject(request.body));

        // respond 200 OK
        return of(new HttpResponse({ status: 200, body: {items: items} }));
      }

      // update
      if (request.url.endsWith('/api/items') && request.method === 'PATCH') {
        // save new item
        let item = this.items.update(Item.fromObject(request.body));

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
        return of(new HttpResponse({ status: 200, body: this.entries.all().map(entry => Entry.copy(entry)) }));
      }

      // get entry by uuid
      if (request.url.match(/\/api\/entries\/[\da-f\-]+$/) && request.method === 'GET') {
        // find entry by uuid in entries array
        let urlParts = request.url.split('/');
        let uuid = urlParts[urlParts.length - 1];
        let entry = this.entries.fetch(uuid);

        return of(new HttpResponse({ status: 200, body: Entry.copy(entry) }));
      }

      // create entry
      if (request.url.endsWith('/api/entries') && request.method === 'POST') {
        // save new entry
        let entries = this.entries.insert(Entry.fromObject(request.body));

        // respond 200 OK
        return of(new HttpResponse({ status: 200, body: {entries: entries} }));
      }

      // update entry
      if (request.url.endsWith('/api/entries') && request.method === 'PATCH') {
        // save new entry
        let entry = this.entries.update(Entry.fromObject(request.body));

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
