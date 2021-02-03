import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/service/cart.service';
import { Breakpoint } from 'src/app/utils/ui/breakpoint.type';
import { BreakpointService } from 'src/app/utils/ui/service/breakpoint.service';
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
  discount = false;
  breakpoint: Breakpoint = 'xsmall';

  constructor(
    private favoriteService: FavoriteService,
    private cartService: CartService,
    private discountService: DiscountService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.favoriteService.favoriteUpdated.subscribe((data) => {
      if (this.product.id === data.id) {
        this.favorite = data.favorite;
      }
    });

    this.discountService.getDiscount(this.product.id).subscribe((discount) => {
      if (+discount > 0) {
        this.discount = true;
      } else {
        this.discount = false;
      }
    });

    this.breakpointService.getBreakpoint().subscribe((breakpoint) => {
      this.breakpoint = breakpoint;
    });
  }

  onFavorite() {
    this.favoriteService.favorite(this.product.id);
  }

  addToCart() {
    this.discountService
      .getPriceAfterDiscount(this.product.id)
      .subscribe((priceAfterDiscount) => {
        this.cartService.addToCart(
          this.product.id,
          this.product.name,
          this.product.imageUrl,
          this.product.price,
          priceAfterDiscount
        );
      });
  }
}
