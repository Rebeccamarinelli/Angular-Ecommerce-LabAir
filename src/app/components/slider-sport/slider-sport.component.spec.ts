import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderSportComponent } from './slider-sport.component';

describe('SliderSportComponent', () => {
  let component: SliderSportComponent;
  let fixture: ComponentFixture<SliderSportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderSportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
