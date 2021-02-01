import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Utils } from 'src/app/utils/utils';
import { ProductService } from '../../product/service/product.service';
import { discounts } from './discount.data';

@Injectable({ providedIn: 'root' })
export class DiscountService {
  constructor(private productService: ProductService) {}

  getPriceAfterDiscount(id: string, currentPrice: number): Observable<string> {
    let newPrice = currentPrice;
    const data = discounts.filter((product) => product.id === id);
    if (data && data.length > 0) {
      newPrice = ( 100 - data[0].discount) * currentPrice / 100;
    }
    return Utils.getObservable<string>(newPrice.toString());
  }
}

export interface DiscountData {
  id: string;
  discount: number;
}
