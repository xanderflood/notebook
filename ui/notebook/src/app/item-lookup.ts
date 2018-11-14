import { Injectable } from '@angular/core';
import { Observable, Subject, pipe, timer } from 'rxjs';
import { tap, filter, switchMap, merge, debounceTime, share } from 'rxjs/operators';

import { Item } from './item'
import { ItemService } from './item.service'

@Injectable({ providedIn: 'root' })
export class ItemLookup {
  public active: boolean = true;
  public get items(): Observable<Item[]> {
    return this.itemSubject;
  }

  private itemSubject: Subject<Item[]> = new Subject<Item[]>();
  private itemArray: Item[] = [];
  private refreshSubject: Subject<void> = new Subject<void>();
  constructor(private service: ItemService) {
    //update this.itemArray periodically and on special request 
    var ticker = this.refreshSubject
      .pipe(
        merge(timer(0, 5000)),
        filter(() => this.active),
        switchMap(() => this.service.getItems()),
      ).subscribe(items => {
        this.itemArray = items
        this.itemSubject.next();
      });
  }

  public refresh() {
    this.refreshSubject.next();
  }

  public filterItems(q: string): Item[] {
    //TODO: return top N fuzzy search results

    return this.itemArray.filter(item =>
      item.name.toLowerCase().indexOf(q) === 0);
  }
}
