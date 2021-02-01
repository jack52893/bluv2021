import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/service/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() favorite = false;
  @Input() rating = 5;
  @Input() bestSeller = false;

  constructor() {}

  ngOnInit(): void {}
}
