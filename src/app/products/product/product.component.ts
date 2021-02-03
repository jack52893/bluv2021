import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Utils } from 'src/app/utils/utils';
import { DiscountService } from '../discount/service/discount.service';
import { FavoriteService } from '../favorite/service/favorite.service';
import { Review } from '../review/service/review.model';
import { ReviewService } from '../review/service/review.service';
import { BestSellerService } from '../tags/best-seller-tag/service/best-seller.service';
import { Product } from './service/product.model';
import { RelatedProductsService } from './service/related-products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product;
  productImages: string[];
  reviews: Review[];
  favorite = false;
  bestSeller = false;
  rating = 5;
  relatedProducts: Product[];
  customersAlsoViewedProducts: Product[];
  priceAfterDiscount: string;

  constructor(
    private route: ActivatedRoute,
    private reviewsService: ReviewService,
    private favoriteService: FavoriteService,
    private relatedProductsService: RelatedProductsService,
    private discountService: DiscountService,
    private bestSellerService: BestSellerService
  ) {}

  ngOnInit(): void {
    this.route.data
      .pipe(
        switchMap((data) => {
          this.product = data.product;
          this.productImages = this.getProductImages();
          return this.discountService.getPriceAfterDiscount(this.product.id);
        }),
        switchMap((priceAfterDiscount) => {
          this.priceAfterDiscount = priceAfterDiscount;
          return this.reviewsService.getReviews(this.product.id);
        }),
        switchMap((reviews) => {
          this.reviews = reviews;
          return this.relatedProductsService.getRelatedProducts(
            this.product.id
          );
        })
      )
      .subscribe((relatedProducts) => {
        this.relatedProducts = relatedProducts;
      });
    this.favoriteService.favoriteUpdated.subscribe((data) => {
      if (this.product && this.product.id === data.id)
        this.favorite = data.favorite;
    });
    this.bestSellerService
      .getBestSeller(this.product.id)
      .subscribe((bestSeller) => {
        this.bestSeller = bestSeller;
      });
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
}
