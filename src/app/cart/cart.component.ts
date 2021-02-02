import { Component, OnInit } from '@angular/core';
import { CartItem } from './service/cart-item.model';
import { CartService } from './service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  total: string;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartItemsUpdated.subscribe((cart) => {
      this.cartItems = cart.items;
      this.total = cart.total.toString();
    });
  }

  onAdd(id: string) {
    this.cartService.increaseQuantity(id, '1');
  }

  onChange(id: string, quantity: string) {
    if(+quantity > 1) {
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
