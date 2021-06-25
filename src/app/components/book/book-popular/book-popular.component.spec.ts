/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookPopularComponent } from './book-popular.component';

describe('BookPopularComponent', () => {
  let component: BookPopularComponent;
  let fixture: ComponentFixture<BookPopularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookPopularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookPopularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
