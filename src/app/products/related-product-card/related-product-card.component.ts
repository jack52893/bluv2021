import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart/service/cart.service';
import { Breakpoint } from 'src/app/utils/ui/breakpoint.type';
import { BreakpointService } from 'src/app/utils/ui/service/breakpoint.service';
import { DiscountService } from '../discount/service/discount.service';
import { FavoriteService } from '../favorite/service/favorite.service';
import { Product } from '../product/service/product.model';
import { BestSellerService } from '../tags/best-seller-tag/service/best-seller.service';

@Component({
  selector: 'app-related-product-card',
  templateUrl: './related-product-card.component.html',
  styleUrls: ['./related-product-card.component.css'],
})
export class RelatedProductCardComponent implements OnInit, OnDestroy {
  @Input() product: Product;
  @Input() rating = 5;
  @Input() reviews = 500;
  bestSeller = false;
  favorite: boolean = false;
  discount = false;
  breakpoint: Breakpoint = 'xsmall';
  subscriptions: Subscription[] = [];

  constructor(
    private favoriteService: FavoriteService,
    private cartService: CartService,
    private discountService: DiscountService,
    private bestSellerService: BestSellerService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.favoriteService.favoriteUpdated.subscribe((data) => {
        if (this.product.id === data.id) {
          this.favorite = data.favorite;
        }
      })
    );

    this.subscriptions.push(
      this.discountService
        .getDiscount(this.product.id)
        .subscribe((discount) => {
          if (+discount > 0) {
            this.discount = true;
          } else {
            this.discount = false;
          }
        })
    );

    this.subscriptions.push(
      this.bestSellerService
        .getBestSeller(this.product.id)
        .subscribe((bestSeller) => {
          this.bestSeller = bestSeller;
        })
    );

    this.subscriptions.push(
      this.breakpointService.getBreakpoint().subscribe((breakpoint) => {
        this.breakpoint = breakpoint;
      })
    );
  }

  onFavorite() {
    this.favoriteService.favorite(this.product.id);
  }

  ngOnDestroy() {
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
