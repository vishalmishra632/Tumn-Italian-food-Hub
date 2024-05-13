import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageproductlistComponent } from './pageproductlist.component';

describe('PageproductlistComponent', () => {
  let component: PageproductlistComponent;
  let fixture: ComponentFixture<PageproductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageproductlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
