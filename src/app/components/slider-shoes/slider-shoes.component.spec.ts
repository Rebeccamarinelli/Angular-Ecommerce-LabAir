import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderShoesComponent } from './slider-shoes.component';

describe('SliderShoesComponent', () => {
  let component: SliderShoesComponent;
  let fixture: ComponentFixture<SliderShoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderShoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderShoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
