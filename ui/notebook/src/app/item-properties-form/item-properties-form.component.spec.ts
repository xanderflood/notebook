import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPropertiesFormComponent } from './item-properties-form.component';

describe('ItemPropertiesFormComponent', () => {
  let component: ItemPropertiesFormComponent;
  let fixture: ComponentFixture<ItemPropertiesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPropertiesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPropertiesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
