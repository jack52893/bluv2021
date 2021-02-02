import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartItem } from './cart-item.model';
import { Cart } from './cart.model';

@Injectable({ providedIn: 'root' })
export class CartService {
  // total = 0;
  total = 3522;
  items: CartItem[] = [
    {
      id: 'b96bdcd0-9c6f-4ede-8e58-54a258722272',
      name: 'Samsung Galaxy S21 Ultra 5G',
      imageUrl: 'assets/images/preview/image-1.jpg',
      price: '1200',
      quantity: '1',
    },
    {
      id: '31404ae6-de5a-4ecd-b668-a641d45aab26',
      name:
        'Samsung Galaxy S20 FE G780F 128GB Dual Sim GSM Unlocked Android Smart Phone (Latin America Variant/US Compatible LTE) - Cloud Red',
      imageUrl: 'assets/images/preview/image-1.jpg',
      price: '800',
      quantity: '2',
    },
    {
      id: 'b3f2b00a-f9ec-43ca-b510-e9f2ac4da7c5',
      name: 'SAMSUNG Unlocked Galaxy Note 20, 128GB Bronze - Smartphone',
      imageUrl: 'assets/images/preview/image-1.jpg',
      price: '722',
      quantity: '1',
    },
  ];
  cartItemsUpdated = new BehaviorSubject<Cart>({
    total: this.total,
    items: this.items,
  });

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
    this.total = +price * +quantity + this.total;
    this.cartItemsUpdated.next({ total: this.total, items: this.items });
  }

  deleteItem(id: string) {
    const data = this.items.filter((item) => item.id === id);
    if (data && data.length) {
      this.total = this.total - +data[0].price * +data[0].quantity;
      this.items = this.items.filter((item) => item.id !== id);
      this.cartItemsUpdated.next({ total: this.total, items: this.items });
    }
  }

  increaseQuantity(id: string, quantity: string) {
    const data = this.items.filter((item) => item.id === id);
    if (data && data.length) {
      data[0].quantity = (+data[0].quantity + +quantity).toString();
      this.total = +data[0].price * +quantity + this.total;
      this.cartItemsUpdated.next({ total: this.total, items: this.items });
    }
  }

  decreaseQuantity(id: string, quantity: string) {
    const data = this.items.filter((item) => item.id === id);
    if (data && data.length) {
      console.log(data[0].quantity);
      console.log(quantity);
      if (+quantity > +data[0].quantity - 1)
        quantity = (+data[0].quantity - 1).toString();
      console.log(quantity);
      let newQuantity = +data[0].quantity - +quantity;
      this.total =
        this.total - (+data[0].quantity - newQuantity) * +data[0].price;
      data[0].quantity = newQuantity.toString();
      this.cartItemsUpdated.next({ total: this.total, items: this.items });
    }
  }

  setQuantity(id: string, quantity: string) {
    const data = this.items.filter((item) => item.id === id);
    if (data && data.length) {
      if (+quantity > +data[0].quantity)
        this.increaseQuantity(id, (+quantity - +data[0].quantity).toString());
      else if (+quantity < +data[0].quantity)
        this.decreaseQuantity(id, (+data[0].quantity - +quantity).toString());
    }
  }
}
