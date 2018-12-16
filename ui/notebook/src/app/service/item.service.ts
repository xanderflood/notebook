import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from '../models/item.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class ItemService {
  private itemsURL = '/api/items';

  constructor(private http: HttpClient) { }

  private log(message: string) {
    console.log(`ItemService: ${message}`);
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsURL)
      .pipe(
        map(items => items.map(item => Item.fromObject(item))),
        catchError(this.handleError('getItems', []))
      );
  }

  /** GET item by uuid. Will 404 if uuid not found */
  getItem(uuid: string): Observable<Item> {
    const url = `${this.itemsURL}/${uuid}`;
    return this.http.get<Item>(url).pipe(
      map(item => Item.fromObject(item)), // returns a {0|1} element array
      catchError(this.handleError<Item>(`getItem uuid=${uuid}`))
    );
  }

  //////// Save methods //////////

  /** POST: create a new item */
  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsURL, item, httpOptions).pipe(
      map(item => Item.fromObject(item)),
      catchError(this.handleError<Item>('createItem'))
    );
  }

  /** PATCH: update an existing item */
  updateItem(item: Item): Observable<Item> {
    return this.http.patch<Item>(this.itemsURL, item, httpOptions).pipe(
      map(item => Item.fromObject(item)),
      catchError(this.handleError<Item>('updateItem'))
    );
  }

  /** DELETE: delete the item from the server */
  deleteItem(item: Item | string): Observable<Item> {
    const uuid = typeof item === 'string' ? item : item.uuid;
    const url = `${this.itemsURL}/${uuid}`;

    return this.http.delete<Item>(url, httpOptions).pipe(
      map(item => Item.fromObject(item)), // returns a {0|1} element array
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

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      throw(error);
      // return of(result as T);
    };
  }
}
