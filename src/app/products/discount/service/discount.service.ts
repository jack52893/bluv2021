import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Utils } from 'src/app/utils/utils';
import { ProductService } from '../../product/service/product.service';
import { discounts } from './discount.data';

@Injectable({ providedIn: 'root' })
export class DiscountService {
  constructor(private productService: ProductService) {}

  getDiscount(id: string): Observable<string> {
    return this.productService.getProduct(id).pipe(
      switchMap((product) => {
        const data = discounts.filter((data) => data.id === product.id);
        if (data && data.length > 0) {
          return Utils.getObservable<string>(data[0].discount);
        }
        return Utils.getObservable<string>('0');
      })
    );
  }

  getPriceAfterDiscount(id: string): Observable<string> {
    return this.productService.getProduct(id).pipe(
      switchMap((product) => {
        const item = discounts.find((product) => product.id === id);
        let newPrice = product.price;
        if (item) {
          newPrice = Math.floor(
            ((100 - +item.discount) * +product.price) / 100
          ).toString();
        }
        return Utils.getObservable<string>(newPrice);
      })
    );
  }
}

export interface DiscountData {
  id: string;
  discount: string;
}
