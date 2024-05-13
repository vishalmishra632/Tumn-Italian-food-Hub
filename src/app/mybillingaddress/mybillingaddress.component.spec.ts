import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MybillingaddressComponent } from './mybillingaddress.component';

describe('MybillingaddressComponent', () => {
  let component: MybillingaddressComponent;
  let fixture: ComponentFixture<MybillingaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MybillingaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MybillingaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
