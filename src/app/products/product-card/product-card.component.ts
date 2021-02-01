import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { CartService } from 'src/app/cart/service/cart.service';
import { DiscountService } from '../discount/service/discount.service';
import { FavoriteService } from '../favorite/service/favorite.service';
import { Product } from '../product/service/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;
  @Input() rating = 5;
  @Input() reviews = 500;
  @Input() bestSeller = true;
  favorite: boolean = false;
  priceAfterDiscount: string;

  discount = false;

  constructor(
    private favoriteService: FavoriteService,
    private discountService: DiscountService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    if (this.product) {
      this.discountService
        .getPriceAfterDiscount(this.product.id, +this.product.price)
        .pipe(
          tap((price) => {
            if (+price < +this.product.price) {
              this.discount = true;
            }
          })
        )
        .subscribe((price) => {
          this.priceAfterDiscount = price.toString();
        });
    }
    this.favoriteService.favoriteUpdated.subscribe((data) => {
      if (this.product.id === data.id) {
        this.favorite = data.favorite;
      }
    });
  }

  onFavorite() {
    this.favoriteService.favorite(this.product.id);
  }

  addToCart() {
    this.cartService.addToCart(
      this.product.id,
      this.product.name,
      this.product.imageUrl,
      this.product.price
    );
  }
}
