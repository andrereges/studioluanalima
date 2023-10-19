import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatButtonTopComponent } from './float-button-top.component';

describe('FloatButtonComponent', () => {
  let component: FloatButtonTopComponent;
  let fixture: ComponentFixture<FloatButtonTopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatButtonTopComponent]
    });
    fixture = TestBed.createComponent(FloatButtonTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
