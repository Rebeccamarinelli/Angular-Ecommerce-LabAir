import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderBannerFirstComponent } from './header-banner-first.component';

describe('HeaderBannerFirstComponent', () => {
  let component: HeaderBannerFirstComponent;
  let fixture: ComponentFixture<HeaderBannerFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderBannerFirstComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderBannerFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
