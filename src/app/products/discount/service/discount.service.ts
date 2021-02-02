import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Utils } from 'src/app/utils/utils';
import { ProductService } from '../../product/service/product.service';
import { discounts } from './discount.data';

@Injectable({ providedIn: 'root' })
export class DiscountService {
  constructor(private productService: ProductService) {}

  getPriceAfterDiscount(id: string): Observable<string> {
    return this.productService.getProduct(id).pipe(
      switchMap((product) => {
        const data = discounts.filter((product) => product.id === id);
        let newPrice = product.price;
        if (data && data.length > 0) {
          newPrice = Math.floor(
            ((100 - data[0].discount) * +product.price) /
            100
          ).toString();
        }
        return Utils.getObservable<string>(newPrice);
      })
    );
  }
}

export interface DiscountData {
  id: string;
  discount: number;
}
