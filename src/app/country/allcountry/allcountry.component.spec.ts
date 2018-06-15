import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcountryComponent } from './allcountry.component';

describe('AllcountryComponent', () => {
  let component: AllcountryComponent;
  let fixture: ComponentFixture<AllcountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
