import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/cart/service/cart-item.model';
import { CartService } from 'src/app/cart/service/cart.service';
import { Coupon } from 'src/app/coupon/service/coupon.model';
import { Breakpoint } from 'src/app/utils/ui/breakpoint.type';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  cartItems: CartItem[] = [];
  coupons: Coupon[] = [];
  total: string;
  totalAfterDiscount: string;
  limit = 50;
  breakpoint: Breakpoint = 'xsmall';

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.cartItemsUpdated.subscribe(data => {
      this.cartItems = data.items;
      this.coupons = data.coupons;
      this.total = data.total.toString();
      this.totalAfterDiscount = data.totalAfterDiscount.toString();
    })
  }


}
