import { CartItem } from './cart-item.model';

export interface Cart {
  total: number;
  items: CartItem[];
}
