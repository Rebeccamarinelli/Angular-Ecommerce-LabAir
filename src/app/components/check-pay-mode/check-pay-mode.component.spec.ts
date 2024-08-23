import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckPayModeComponent } from './check-pay-mode.component';

describe('CheckPayModeComponent', () => {
  let component: CheckPayModeComponent;
  let fixture: ComponentFixture<CheckPayModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckPayModeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckPayModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
