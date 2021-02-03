import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { coupons } from './coupon.data';

@Injectable({ providedIn: 'root' })
export class CouponService {
  getCouponValue(coupon: string): Observable<string> {
    const data = coupons.filter((data) => data.coupon === coupon);
    if (data && data.length > 0) {
      return Utils.getObservable<string>(data[0].value);
    }
    return Utils.getObservable<string>('0');
  }
}
