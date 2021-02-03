import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellerTagComponent } from './best-seller-tag.component';

describe('BestSellerTagComponent', () => {
  let component: BestSellerTagComponent;
  let fixture: ComponentFixture<BestSellerTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestSellerTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestSellerTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
