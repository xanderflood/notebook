import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Entry } from './entry';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class EntryService {
  private entriesURL = 'api/entries';

  constructor(
    private http: HttpClient) { }

  private log(message: string) {
    console.log(`EntryService: ${message}`);
  }

  getEntries (): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.entriesURL)
      .pipe(
        tap(entries => this.log('fetched entries')),
        catchError(this.handleError('getEntries', []))
      );
  }

  /** GET entry by id. Return `undefined` when id not found */
  getEntryNo404<Data>(id: number): Observable<Entry> {
    const url = `${this.entriesURL}/?id=${id}`;
    return this.http.get<Entry[]>(url)
      .pipe(
        map(entries => entries[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} entry id=${id}`);
        }),
        catchError(this.handleError<Entry>(`getEntry id=${id}`))
      );
  }

  /** GET entry by id. Will 404 if id not found */
  getEntry(id: number): Observable<Entry> {
    const url = `${this.entriesURL}/${id}`;
    return this.http.get<Entry>(url).pipe(
      tap(_ => this.log(`fetched entry id=${id}`)),
      catchError(this.handleError<Entry>(`getEntry id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new entry to the server */
  addEntry (entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.entriesURL, entry, httpOptions).pipe(
      tap((entry: Entry) => this.log(`added entry w/ id=${entry.uuid}`)),
      catchError(this.handleError<Entry>('addEntry'))
    );
  }

  /** DELETE: delete the entry from the server */
  deleteEntry (entry: Entry | number): Observable<Entry> {
    const id = typeof entry === 'number' ? entry : entry.uuid;
    const url = `${this.entriesURL}/${id}`;

    return this.http.delete<Entry>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted entry id=${id}`)),
      catchError(this.handleError<Entry>('deleteEntry'))
    );
  }

  /** PUT: update the entry on the server */
  updateEntry (entry: Entry): Observable<any> {
    return this.http.put(this.entriesURL, entry, httpOptions).pipe(
      tap(_ => this.log(`updated entry id=${entry.uuid}`)),
      catchError(this.handleError<any>('updateEntry'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
