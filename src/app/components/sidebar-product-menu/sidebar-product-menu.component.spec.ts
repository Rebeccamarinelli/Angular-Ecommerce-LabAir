import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarProductMenuComponent } from './sidebar-product-menu.component';

describe('SidebarProductMenuComponent', () => {
  let component: SidebarProductMenuComponent;
  let fixture: ComponentFixture<SidebarProductMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarProductMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarProductMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
