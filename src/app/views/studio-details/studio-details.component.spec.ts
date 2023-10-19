import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioDetailsComponent } from './studio-details.component';

describe('DetailsComponent', () => {
  let component: StudioDetailsComponent;
  let fixture: ComponentFixture<StudioDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudioDetailsComponent]
    });
    fixture = TestBed.createComponent(StudioDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
