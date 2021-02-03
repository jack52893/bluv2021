import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Coupon } from '../coupon/service/coupon.model';
import { CouponService } from '../coupon/service/coupon.service';
import { Breakpoint } from '../utils/ui/breakpoint.type';
import { BreakpointService } from '../utils/ui/service/breakpoint.service';
import { CartItem } from './service/cart-item.model';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, OnDestroy {
  cartItems: CartItem[] = [];
  coupons: Coupon[] = [];
  total: string;
  totalAfterDiscount: string;
  limit = 50;
  breakpoint: Breakpoint = 'xsmall';
  subscriptions: Subscription[] = [];

  constructor(
    private cartService: CartService,
    private couponService: CouponService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.cartService.cartItemsUpdated.subscribe((cart) => {
        this.cartItems = cart.items;
        this.total = cart.total.toString();
        this.totalAfterDiscount = cart.totalAfterDiscount.toString();
        this.coupons = cart.coupons;
      })
    );
    this.subscriptions.push(
      this.breakpointService.getBreakpoint().subscribe((breakpoint) => {
        this.breakpoint = breakpoint;
      })
    );
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

  ngOnDestroy() {
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
