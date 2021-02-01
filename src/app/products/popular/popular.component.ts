import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product/service/product.model';
import { PopularProductsService } from './service/popular-products.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit {
  popularProducts$: Observable<Product[]>;

  constructor(private popularProductsService: PopularProductsService) {}

  ngOnInit(): void {
    this.popularProducts$ = this.popularProductsService.getPopularProducts();
  }
}
