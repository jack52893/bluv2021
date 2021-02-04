import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { products } from './product.data';
import { Product } from './product.model';

@Injectable({ providedIn: 'root' })
export class ViewedProductsService {
  getViewedProducts(): Observable<Product[]> {
    return Utils.getObservable<Product[]>(products.slice(0, 20));
  }
}
