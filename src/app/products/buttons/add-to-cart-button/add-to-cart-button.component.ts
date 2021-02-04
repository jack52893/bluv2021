import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { Size } from 'src/app/utils/ui/size.type';

@Component({
  selector: 'app-add-to-cart-button',
  templateUrl: './add-to-cart-button.component.html',
  styleUrls: ['./add-to-cart-button.component.css'],
})
export class AddToCartButtonComponent implements OnInit {
  @Input() id: string;
  @Input() size: Size = 'medium';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  addToCart() {
    this.cartService.addToCart(this.id);
  }
}
