import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/service/product.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Input() favorite = false;
  @Input() rating = 5;
  @Input() reviews = 500;
  @Input() bestSeller = false;
  discount: boolean = false;
  constructor() {}

  ngOnInit(): void {
  }
}
