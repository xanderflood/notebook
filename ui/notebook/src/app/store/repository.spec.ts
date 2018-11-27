import { TestBed } from '@angular/core/testing';

import { Repository, UUIDable } from './repository';

class Widget implements UUIDable {
    constructor(public uuid: string, public value: boolean) { }
}

describe('Repository', () => {
  let sourceArray: Widget[];
  let repository: Repository<Widget>;

  beforeEach(() => {
    // TestBed.configureTestingModule({})

    sourceArray = [
      new Widget("widget1", true),
      new Widget("widget2", false),
      new Widget("widget3", true),
    ];
    repository = new Repository<Widget>(sourceArray);
  });

  describe('all', () => {
    it('works properly', () => {
      expect(repository.all()).toEqual(sourceArray);
    })
  });
  describe('fetch', () => {
    it('works properly', () => {
      expect(repository.fetch("widget1")).toEqual(sourceArray[0]);
      expect(repository.fetch("widget2")).toEqual(sourceArray[1]);
      expect(repository.fetch("widget3")).toEqual(sourceArray[2]);
      expect(repository.fetch("widget4")).toBeUndefined();
    })
  });
  describe('save', () => {
    it('updates if it already exists', () => {
      var newRepo = repository.save(new Widget("widget2", true));
      expect(repository.fetch("widget2").value).toEqual(false);
      expect(newRepo.fetch("widget2").value).toEqual(true);
    })
    it('inserts it if it doesn\'t exist', () => {
      var four = new Widget("widget4", true);
      var newRepo = repository.save(four);
      expect(repository.fetch("widget4")).toEqual(undefined);
      expect(newRepo.fetch("widget4")).toEqual(four);
    })
  });
  describe('delete', () => {
    it('works properly', () => {
      var newRepo = repository.delete("widget2");
      expect(repository.fetch("widget2")).toEqual(sourceArray[1]);
      expect(newRepo.fetch("widget2")).toEqual(undefined);
    })
  });
});
