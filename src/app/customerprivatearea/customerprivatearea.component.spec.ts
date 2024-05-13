import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerprivateareaComponent } from './customerprivatearea.component';

describe('CustomerprivateareaComponent', () => {
  let component: CustomerprivateareaComponent;
  let fixture: ComponentFixture<CustomerprivateareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerprivateareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerprivateareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
