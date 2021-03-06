import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { AuthService } from './auth.service';
import { Entry } from '../models/entry.model';

import { options } from '../../environments/environment';

interface QueryResponse {
  entries: Entry[];
}

@Injectable({ providedIn: 'root' })
export class EntryService {
  private entriesURL = '/api/entries';

  constructor(
    private http: HttpClient,
    private auth: AuthService, 
  ) {
    if (options.apiURL) {
      this.entriesURL = options.apiURL + this.entriesURL;
    }
  }

  private requestOptions(): {headers: HttpHeaders} {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.auth.token,
      })
    }
  }

  private log(message: string) {
    console.log(`EntryService: ${message}`);
  }

  getEntries(): Observable<Entry[]> {
    return this.http.get<QueryResponse>(this.entriesURL, this.requestOptions())
      .pipe(
        tap(console.log),
        map(data => data.entries.map(entry => Entry.fromObject(entry))),
        catchError(this.handleError('getEntries', [])),
      );
  }

  /** GET entry by uuid. Will 404 if uuid not found */
  getEntry(uuid: string): Observable<Entry> {
    const url = `${this.entriesURL}/${uuid}`;
    return this.http.get<Entry>(url, this.requestOptions()).pipe(
      map(entry => Entry.fromObject(entry)),
      catchError(this.handleError<Entry>(`getEntry uuid=${uuid}`))
    );
  }

  //////// Save methods //////////

  /** POST: create a new entry */
  createEntry(entry: Entry): Observable<Entry> {
    console.log("bouta create", entry)
    return this.http.post<Entry>(this.entriesURL, entry, this.requestOptions()).pipe(
      map(entry => Entry.fromObject(entry)),
      catchError(this.handleError<Entry>('createEntry'))
    );
  }

  /** POST: update an existing entry */
  updateEntry(entry: Entry): Observable<Entry> {
    return this.http.patch<Entry>(this.entriesURL, entry, this.requestOptions()).pipe(
      map(entry => Entry.fromObject(entry)),
      catchError(this.handleError<Entry>('updateEntry'))
    );
  }

  /** DELETE: delete the entry from the server */
  deleteEntry(entry: Entry | string): Observable<Entry> {
    const uuid = typeof entry === 'string' ? entry : entry.uuid;
    const url = `${this.entriesURL}/${uuid}`;

    return this.http.delete<Entry>(url, this.requestOptions()).pipe(
      map(entry => Entry.fromObject(entry)),
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

      console.error(error); // log to console instead

      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      throw(error);
      // return of(result as T);
    };
  }
}
