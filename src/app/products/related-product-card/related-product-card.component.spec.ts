import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedProductCardComponent } from './related-product-card.component';

describe('ProductCardComponent', () => {
  let component: RelatedProductCardComponent;
  let fixture: ComponentFixture<RelatedProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelatedProductCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatedProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
