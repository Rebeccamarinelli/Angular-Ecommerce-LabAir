import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAsideComponent } from './check-aside.component';

describe('CheckAsideComponent', () => {
  let component: CheckAsideComponent;
  let fixture: ComponentFixture<CheckAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckAsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
