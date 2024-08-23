import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckThanksComponent } from './check-thanks.component';

describe('CheckThanksComponent', () => {
  let component: CheckThanksComponent;
  let fixture: ComponentFixture<CheckThanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckThanksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckThanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
