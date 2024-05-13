import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypersonalinformationComponent } from './mypersonalinformation.component';

describe('MypersonalinformationComponent', () => {
  let component: MypersonalinformationComponent;
  let fixture: ComponentFixture<MypersonalinformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypersonalinformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypersonalinformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
