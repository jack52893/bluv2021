import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './cart-item.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  items: CartItem[] = [
    { id: 'b96bdcd0-9c6f-4ede-8e58-54a258722272', name: 'Samsung Galaxy S21 Ultra 5G', imageUrl: 'assets/images/preview/image-1.jpg', price: '1200', quantity: '1' },
  ];
  cartItemsUpdated = new BehaviorSubject<CartItem[]>(this.items);
  total: number = 0;
  
  addToCart(
    id: string,
    name: string,
    imageUrl: string,
    price: string,
    quantity: string = '1'
  ) {
    const data = this.items.filter((item) => item.id === id);
    if (data && data.length > 0) {
      data[0].quantity = (+data[0].quantity + 1).toString();
    } else {
      this.items.push({
        id: id,
        name: name,
        price: price,
        imageUrl: imageUrl,
        quantity: quantity,
      });
    }
    this.cartItemsUpdated.next(this.items);
  }

  deleteItem(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
    this.cartItemsUpdated.next(this.items);
  }
}
