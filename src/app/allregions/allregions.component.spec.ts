import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllregionsComponent } from './allregions.component';

describe('AllregionsComponent', () => {
  let component: AllregionsComponent;
  let fixture: ComponentFixture<AllregionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllregionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllregionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
