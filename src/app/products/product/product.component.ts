import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FavoriteService } from '../favorite/service/favorite.service';
import { Review } from '../review/service/review.model';
import { ProductComponentData } from './service/product-component-data.model';
import { Product } from './service/product.model';
import { RecommendedProductsService } from './service/recommended-products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  product: Product;
  productImages: string[];
  reviews: Review[];
  favorite = false;
  bestSeller = false;
  rating = 5;
  relatedProducts: Product[];
  customersViewedProducts: Product[];
  recommendedProducts: Product[];
  viewedProducts: Product[];

  priceAfterDiscount: string;
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private recommendedProductsService: RecommendedProductsService,
    private favoriteService: FavoriteService
  ) {}

  ngOnInit(): void {
    this.route.data
      .pipe(
        switchMap((data: { productData: ProductComponentData }) => {
          this.product = data.productData.product;
          this.productImages = data.productData.productImages;
          this.reviews = data.productData.reviews;
          this.favorite = data.productData.favorite;
          this.bestSeller = data.productData.bestSeller;
          this.priceAfterDiscount = data.productData.priceAfterDiscount;
          this.relatedProducts = data.productData.relatedProducts;
          this.customersViewedProducts = data.productData.customersViewedProducts;
          this.viewedProducts = data.productData.viewedProducts;
          return this.recommendedProductsService.getRecommendedProducts(
            data.productData.product.id
          );
        })
      )
      .subscribe((recommendedProducts) => {
        this.recommendedProducts = recommendedProducts;
      });

    this.subscriptions.push(
      this.favoriteService.favoriteUpdated.subscribe((data) => {
        if (this.product && this.product.id === data.id)
          this.favorite = data.favorite;
      })
    );
  }

  onFavorite() {
    this.favoriteService.favorite(this.product.id);
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
