import { Coupon } from 'src/app/coupon/service/coupon.model';
import { CartItem } from './cart-item.model';

export interface Cart {
  total: number;
  totalAfterDiscount: number;
  coupons: Coupon[];
  items: CartItem[];
}
