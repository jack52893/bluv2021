import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartItem } from './service/cart-item.model';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItemsUpdated.subscribe((items) => {
      this.cartItems = items;
    });
  }

  onAdd(item: CartItem) {
    item.quantity = (+item.quantity + 1).toString();
  }

  onRemove(item: CartItem) {
    if (+item.quantity > 1) {
      item.quantity = (+item.quantity - 1).toString();
    }
  }

  onDelete(id: string) {
    this.cartService.deleteItem(id);
  }
}
