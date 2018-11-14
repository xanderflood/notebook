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
  private entriesURL = '/api/entries';

  constructor(
    private http: HttpClient) { }

  private log(message: string) {
    console.log(`EntryService: ${message}`);
  }

  getEntries(): Observable<Entry[]> {
    return this.http.get<Entry[]>(this.entriesURL)
      .pipe(
        map(entries => entries.map(entry => Entry.fromObject(entry))),
        tap(() => this.log('fetched entries')),
        catchError(this.handleError('getEntries', []))
      );
  }

  /** GET entry by uuid. Return `undefined` when uuid not found */
  getEntryNo404<Data>(uuid: string): Observable<Entry> {
    const url = `${this.entriesURL}/?uuid=${uuid}`;
    return this.http.get<Entry[]>(url)
      .pipe(
        map(entries => Entry.fromObject(entries[0])), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} entry uuid=${uuid}`);
        }),
        catchError(this.handleError<Entry>(`getEntry uuid=${uuid}`))
      );
  }

  /** GET entry by uuid. Will 404 if uuid not found */
  getEntry(uuid: string): Observable<Entry> {
    const url = `${this.entriesURL}/${uuid}`;
    return this.http.get<Entry>(url).pipe(
      tap(() => this.log(`fetched entry uuid=${uuid}`)),
      map(entry => Entry.fromObject(entry)),
      catchError(this.handleError<Entry>(`getEntry uuid=${uuid}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new entry to the server */
  create(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(this.entriesURL, entry, httpOptions).pipe(
      tap((entry: Entry) => this.log(`added entry w/ uuid=${entry.uuid}`)),
      map(entry => Entry.fromObject(entry)),
      catchError(this.handleError<Entry>('createEntry'))
    );
  }

  /** PUT: update the entry on the server */
  update(entry: Entry): Observable<any> {
    return this.http.patch(this.entriesURL, entry, httpOptions).pipe(
      tap(_ => this.log(`updated entry uuid=${entry.uuid}`)),
      map(entry => Entry.fromObject(entry)),
      catchError(this.handleError<any>('updateEntry'))
    );
  }

  /** DELETE: delete the entry from the server */
  delete(entry: Entry | string): Observable<Entry> {
    const uuid = typeof entry === 'string' ? entry : entry.uuid;
    const url = `${this.entriesURL}/${uuid}`;

    return this.http.delete<Entry>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted entry uuid=${uuid}`)),
      catchError(this.handleError<Entry>('deleteEntry'))
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
