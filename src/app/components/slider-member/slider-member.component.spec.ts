import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderMemberComponent } from './slider-member.component';

describe('SliderMemberComponent', () => {
  let component: SliderMemberComponent;
  let fixture: ComponentFixture<SliderMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
