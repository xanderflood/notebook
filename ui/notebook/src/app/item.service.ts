import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from './item';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ItemService {
  private itemsURL = '/api/items';

  constructor(
    private http: HttpClient) { }

  private log(message: string) {
    console.log(`ItemService: ${message}`);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsURL)
      .pipe(
        map(items => items.map(item => Item.fromObject(item))),
        tap(() => this.log('fetched items')),
        catchError(this.handleError('getItems', []))
      );
  }

  /** GET item by uuid. Return `undefined` when uuid not found */
  getItemNo404<Data>(uuid: string): Observable<Item> {
    const url = `${this.itemsURL}/?uuid=${uuid}`;
    return this.http.get<Item[]>(url)
      .pipe(
        map(items => Item.fromObject(items[0])), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} item uuid=${uuid}`);
        }),
        catchError(this.handleError<Item>(`getItem uuid=${uuid}`))
      );
  }

  /** GET item by uuid. Will 404 if uuid not found */
  getItem(uuid: string): Observable<Item> {
    const url = `${this.itemsURL}/${uuid}`;
    return this.http.get<Item>(url).pipe(
      map(item => Item.fromObject(item)), // returns a {0|1} element array
      tap(() => this.log(`fetched item uuid=${uuid}`)),
      catchError(this.handleError<Item>(`getItem uuid=${uuid}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new item to the server */
  create(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsURL, item, httpOptions).pipe(
      map(item => Item.fromObject(item)), // returns a {0|1} element array
      tap((item: Item) => this.log(`added item w/ uuid=${item.uuid}`)),
      catchError(this.handleError<Item>('addItem'))
    );
  }

  /** PUT: update the item on the server */
  update(item: Item): Observable<any> {
    return this.http.patch(this.itemsURL, item, httpOptions).pipe(
      map(item => Item.fromObject(item)), // returns a {0|1} element array
      tap(_ => this.log(`updated item uuid=${item.uuid}`)),
      catchError(this.handleError<any>('updateItem'))
    );
  }

  /** DELETE: delete the item from the server */
  delete(item: Item | string): Observable<Item> {
    const uuid = typeof item === 'string' ? item : item.uuid;
    const url = `${this.itemsURL}/${uuid}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted item uuid=${uuid}`)),
      catchError(this.handleError<Item>('deleteItem'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      throw(error);
      // return of(result as T);
    };
  }
}
