import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavCheckComponent } from './nav-check.component';

describe('NavCheckComponent', () => {
  let component: NavCheckComponent;
  let fixture: ComponentFixture<NavCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavCheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
