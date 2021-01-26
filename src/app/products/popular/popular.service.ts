import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { Product } from '../product/product.model';
import { ProductService } from '../product/product.service';

@Injectable({
  providedIn: 'root'
})
export class PopularService {

  products: Product[] = [];

  constructor(private productService: ProductService) { }

  getPopularProducts(): Observable<Product[]> {
    return Utils.getObservable(this.products.slice());
  }
}
