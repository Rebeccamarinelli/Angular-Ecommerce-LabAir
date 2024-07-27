import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderShoeComponent } from './slider-shoe.component';

describe('SliderShoeComponent', () => {
  let component: SliderShoeComponent;
  let fixture: ComponentFixture<SliderShoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderShoeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderShoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
