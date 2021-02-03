import { Component, OnInit } from '@angular/core';
import { Coupon } from '../coupon/service/coupon.model';
import { CouponService } from '../coupon/service/coupon.service';
import { CartItem } from './service/cart-item.model';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  coupons: Coupon[] = [];
  total: string;
  totalAfterDiscount: string;
  limit = 50;

  constructor(
    private cartService: CartService,
    private couponService: CouponService
  ) {}

  ngOnInit(): void {
    this.cartService.cartItemsUpdated.subscribe((cart) => {
      this.cartItems = cart.items;
      this.total = cart.total.toString();
      this.totalAfterDiscount = cart.totalAfterDiscount.toString();
      this.coupons = cart.coupons;
    });
  }

  applyCoupon(coupon: string) {
    this.cartService.applyCoupon(coupon);
  }

  removeCoupon(coupon: string) {
    this.cartService.removeCoupon(coupon);
  }
  onAdd(id: string) {
    this.cartService.increaseQuantity(id, '1');
  }

  onChange(id: string, quantity: string) {
    if (+quantity > 1) {
      this.cartService.setQuantity(id, quantity);
    }
  }

  onRemove(id: string, quantity: string) {
    if (+quantity > 1) {
      this.cartService.decreaseQuantity(id, '1');
    }
  }

  onDelete(id: string) {
    this.cartService.deleteItem(id);
  }
}
