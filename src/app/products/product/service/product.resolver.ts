import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, map, switchMap, take } from 'rxjs/operators';
import { Utils } from 'src/app/utils/utils';
import { DiscountService } from '../../discount/service/discount.service';
import { FavoriteService } from '../../favorite/service/favorite.service';
import { ReviewService } from '../../review/service/review.service';
import { BestSellerService } from '../../tags/best-seller-tag/service/best-seller.service';
import { CustomersViewedProductsService } from './customers-viewed-products.service';
import { ProductComponentData } from './product-component-data.model';
import { ProductService } from './product.service';
import { RecommendedProductsService } from './recommended-products.service';
import { RelatedProductsService } from './related-products.service';
import { ViewedProductsService } from './viewed-products.service';

@Injectable({ providedIn: 'root' })
export class ProductResolver implements Resolve<ProductComponentData> {
  // product: Product;
  // productImages: string[];
  // reviews: Review[];
  // favorite: boolean;
  // bestSeller: boolean;
  // priceAfterDiscount: string;
  // relatedProducts: Product[];
  // customersViewedProducts: Product[];
  // recommendedProducts: Product[];
  // viewedProducts: Product[];
  constructor(
    private productService: ProductService,
    private reviewService: ReviewService,
    private favoriteService: FavoriteService,
    private bestSellerService: BestSellerService,
    private discountService: DiscountService,
    private relatedProductsService: RelatedProductsService,
    private customersViewedProductsService: CustomersViewedProductsService,
    private recommendedProductsService: RecommendedProductsService,
    private viewedProductsService: ViewedProductsService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<ProductComponentData>
    | Promise<ProductComponentData>
    | ProductComponentData {
    const id = route.params['id'];
    const productComponentData: ProductComponentData = {
      product: null,
      productImages: null,
      reviews: null,
      favorite: false,
      bestSeller: false,
      priceAfterDiscount: null,
      relatedProducts: null,
      customersViewedProducts: null,
      recommendedProducts: null,
      viewedProducts: null,
    };

    return this.productService.getProduct(id).pipe(
      switchMap((product) => {
        productComponentData.product = product;
        return this.productService.getProductImages(id);
      }),
      switchMap((images) => {
        productComponentData.productImages = images;
        return this.reviewService.getReviews(id);
      }),
      switchMap((reviews) => {
        productComponentData.reviews = reviews;
        return this.favoriteService.getFavorite(id);
      }),
      switchMap((favorite) => {
        productComponentData.favorite = favorite;
        return this.bestSellerService.getBestSeller(id);
      }),
      switchMap((bestSeller) => {
        productComponentData.bestSeller = bestSeller;
        return this.discountService.getPriceAfterDiscount(id);
      }),
      switchMap((priceAfterDiscount) => {
        productComponentData.priceAfterDiscount = priceAfterDiscount;
        return this.relatedProductsService.getRelatedProducts(id);
      }),
      switchMap((relatedProducts) => {
        productComponentData.relatedProducts = relatedProducts;
        return this.customersViewedProductsService.getCustomersViewedProducts(
          id
        );
      }),
      map((customersViewedProducts) => {
        productComponentData.customersViewedProducts = customersViewedProducts;
        return productComponentData;
      }),
      first()
    );
  }
}
