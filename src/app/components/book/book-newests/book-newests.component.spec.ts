/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BookNewestsComponent } from './book-newests.component';

describe('BookNewestsComponent', () => {
  let component: BookNewestsComponent;
  let fixture: ComponentFixture<BookNewestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookNewestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookNewestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
