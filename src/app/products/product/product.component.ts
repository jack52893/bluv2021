import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { filter, first, map, take } from 'rxjs/operators';
import { Utils } from 'src/app/utils/utils';
import { ReviewService } from '../review/service/review.service';
import { Product } from './service/product.model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnDestroy {
  product$: Observable<Product>;
  productImages$: Observable<string[]>;
  favorite = false;
  bestSeller = false;
  rating = 5;
  reviews = [];
  relatedProducts: Product[];
  customersAlsoViewedProducts: Product[];

  productSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private reviewsService: ReviewService
  ) {}

  ngOnInit(): void {
    console.log('product.........');
    // console.log('data     ', this.route.snapshot.data);
    // this.route.data.subscribe((data) => console.log('resolv   ', data));
    // this.product$ = this.route.data.pipe(
    //   map((data: { product: Product }) => data.product as Product)
    // );
    // this.productImages$ = this.getProductImages();

    // this.route.params.subscribe((params) => {
    //   const id = params['id'];
    //   this.product$ = this.productService.getProduct(id);

    //   this.reviews = this.reviewsService.getReviews(id);
    //   this.rating = this.reviewsService.getRating(id);
    //   // this.relatedProducts = this.productService.getRelatedProducts(id);
    //   // this.customersAlsoViewedProducts = this.productService.getCustomersAlsoViewedProducts(
    //   //   id
    //   // );
    // });
  }
  getProductImages(): Observable<string[]> {
    return this.product$.pipe(
      map((product) => {
        const images: string[] = [];
        images.push(product.imageUrl);
        if (product && product.images) {
          for (let image of product.images) {
            images.push(image);
          }
        }
        for (let image of Utils.getPreviewImages()) {
          images.push(image);
        }
        return images;
      })
    );
  }

  ngOnDestroy() {
    this.product$ = undefined;
  }
}
