import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  @Input() product: Product;
  @Input() favorite = false;
  @Input() rating = 5;
  @Input() bestSeller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
