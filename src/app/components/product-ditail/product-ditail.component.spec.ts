import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDitailComponent } from './product-ditail.component';

describe('ProductDitailComponent', () => {
  let component: ProductDitailComponent;
  let fixture: ComponentFixture<ProductDitailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductDitailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDitailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
