import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarGoBackComponent } from './navbar-goback.component';

describe('HeaderComponent', () => {
  let component: NavbarGoBackComponent;
  let fixture: ComponentFixture<NavbarGoBackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarGoBackComponent]
    });
    fixture = TestBed.createComponent(NavbarGoBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
