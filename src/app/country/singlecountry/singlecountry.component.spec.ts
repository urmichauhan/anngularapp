import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglecountryComponent } from './singlecountry.component';

describe('SinglecountryComponent', () => {
  let component: SinglecountryComponent;
  let fixture: ComponentFixture<SinglecountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglecountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglecountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
