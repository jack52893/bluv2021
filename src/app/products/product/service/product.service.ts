import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { Product } from './product.model';
import { products } from './products.data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProduct(id: string): Observable<Product> {
    const data = products.filter((product) => product.id === id);
    let product: Product = null;
    if (data && data.length > 0) {
      product = data[0];
    }
    return Utils.getObservable(product);
  }

  getProducts(): Observable<Product[]> {
    return Utils.getObservable(products);
  }
}
