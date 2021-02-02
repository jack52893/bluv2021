import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
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
  limit: number = 50;

  constructor(
    private favoriteService: FavoriteService,
    private cartService: CartService,
    private discountService: DiscountService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.favoriteService.favoriteUpdated.subscribe((data) => {
      if (this.product.id === data.id) {
        this.favorite = data.favorite;
      }
    });
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe((data) => {
      if (data.matches) {
        this.limit = 50;
      }
    });
    this.breakpointObserver
      .observe(Breakpoints.HandsetLandscape)
      .subscribe((data) => {
        if (data.matches) {
          this.limit = 40;
        }
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
          priceAfterDiscount
        );
      });
  }
}
