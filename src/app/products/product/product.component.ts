import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Utils } from 'src/app/utils/utils';
import { DiscountService } from '../discount/service/discount.service';
import { FavoriteService } from '../favorite/service/favorite.service';
import { Review } from '../review/service/review.model';
import { ReviewService } from '../review/service/review.service';
import { BestSellerService } from '../tags/best-seller-tag/service/best-seller.service';
import { CustomersViewedProductsService } from './service/customers-viewed-products.service';
import { Product } from './service/product.model';
import { RecommendedProductsService } from './service/recommended-products.service';
import { RelatedProductsService } from './service/related-products.service';
import { ViewedProductsService } from './service/viewed-products.service';

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
    private reviewsService: ReviewService,
    private favoriteService: FavoriteService,
    private discountService: DiscountService,
    private bestSellerService: BestSellerService,
    private relatedProductsService: RelatedProductsService,
    private customersViewedProductsService: CustomersViewedProductsService,
    private recommendedProductsService: RecommendedProductsService,
    private viewedProductsService: ViewedProductsService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.route.data
        .pipe(
          switchMap((data) => {
            this.product = data.product;
            this.productImages = this.getProductImages();
            return this.discountService.getPriceAfterDiscount(this.product.id);
          }),
          switchMap((priceAfterDiscount) => {
            this.priceAfterDiscount = priceAfterDiscount;
            return this.favoriteService.getFavorite(this.product.id);
          }),
          switchMap((favorite) => {
            this.favorite = favorite;
            return this.bestSellerService.getBestSeller(this.product.id);
          }),
          switchMap((bestSeller) => {
            this.bestSeller = bestSeller;
            return this.reviewsService.getReviews(this.product.id);
          }),
          switchMap((reviews) => {
            this.reviews = reviews;
            return this.relatedProductsService.getRelatedProducts(
              this.product.id
            );
          }),
          switchMap((relatedProducts) => {
            this.relatedProducts = relatedProducts;
            return this.customersViewedProductsService.getCustomersViewedProducts(
              this.product.id
            );
          }),
          switchMap((customersViewedProducts) => {
            this.customersViewedProducts = customersViewedProducts;
            return this.recommendedProductsService.getRecommendedProducts(
              this.product.id
            );
          }),
          switchMap((recommendedProducts) => {
            this.recommendedProducts = recommendedProducts;
            return this.viewedProductsService.getViewedProducts(
              this.product.id
            );
          })
        )
        .subscribe((viewedProducts) => {
          this.viewedProducts = viewedProducts;
        })
    );

    this.subscriptions.push(
      this.favoriteService.favoriteUpdated.subscribe((data) => {
        if (this.product && this.product.id === data.id)
          this.favorite = data.favorite;
      })
    );

    this.subscriptions.push(
      this.bestSellerService
        .getBestSeller(this.product.id)
        .subscribe((bestSeller) => {
          this.bestSeller = bestSeller;
        })
    );
  }

  getProductImages(): string[] {
    const images: string[] = [];
    images.push(this.product.imageUrl);
    if (this.product && this.product.images) {
      for (let image of this.product.images) {
        images.push(image);
      }
    }
    for (let image of Utils.getPreviewImages()) {
      images.push(image);
    }
    return images;
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
