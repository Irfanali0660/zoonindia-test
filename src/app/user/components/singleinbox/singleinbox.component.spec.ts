import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleinboxComponent } from './singleinbox.component';

describe('SingleinboxComponent', () => {
  let component: SingleinboxComponent;
  let fixture: ComponentFixture<SingleinboxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleinboxComponent]
    });
    fixture = TestBed.createComponent(SingleinboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
