import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() favorite = false;
  @Input() rating = 5;
  @Input() bestSeller = false;
  constructor() {}

  ngOnInit(): void {}
}
