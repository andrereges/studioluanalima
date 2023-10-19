import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatButtonWhatsappComponent } from './float-button-whatsapp.component';

describe('FloatButtonComponent', () => {
  let component: FloatButtonWhatsappComponent;
  let fixture: ComponentFixture<FloatButtonWhatsappComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FloatButtonWhatsappComponent]
    });
    fixture = TestBed.createComponent(FloatButtonWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
