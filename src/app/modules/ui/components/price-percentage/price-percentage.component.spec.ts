import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePercentageComponent } from './price-percentage.component';

describe('PricePercentageComponent', () => {
  let component: PricePercentageComponent;
  let fixture: ComponentFixture<PricePercentageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PricePercentageComponent]
    });
    fixture = TestBed.createComponent(PricePercentageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
