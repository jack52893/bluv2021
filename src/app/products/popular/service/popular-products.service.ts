import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../../product/service/product.model';
import { ProductService } from '../../product/service/product.service';

@Injectable({
  providedIn: 'root',
})
export class PopularProductsService {
  constructor(private productService: ProductService) {}

  getPopularProducts(): Observable<Product[]> {
    return this.productService
      .getSomeProducts()
      .pipe(map((products) => products.slice(1, 21)));
  }
}
