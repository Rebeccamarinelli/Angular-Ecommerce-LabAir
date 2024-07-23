import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBannerScdComponent } from './header-banner-scd.component';

describe('HeaderBannerScdComponent', () => {
  let component: HeaderBannerScdComponent;
  let fixture: ComponentFixture<HeaderBannerScdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBannerScdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBannerScdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
