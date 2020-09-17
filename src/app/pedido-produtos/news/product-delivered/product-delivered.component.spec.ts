import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeliveredComponent } from './product-delivered.component';

describe('ProductDeliveredComponent', () => {
  let component: ProductDeliveredComponent;
  let fixture: ComponentFixture<ProductDeliveredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeliveredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeliveredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
