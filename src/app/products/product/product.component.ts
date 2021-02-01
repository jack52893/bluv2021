import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Utils } from 'src/app/utils/utils';
import { Review } from '../review/service/review.model';
import { ReviewService } from '../review/service/review.service';
import { Product } from './service/product.model';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product$: Observable<Product>;
  productImages$: Observable<string[]>;
  reviews$: Observable<Review[]>;
  favorite = false;
  bestSeller = false;
  rating = 5;
  relatedProducts: Product[];
  customersAlsoViewedProducts: Product[];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private reviewsService: ReviewService
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.data.pipe(map((data) => data.product));
    this.productImages$ = this.getProductImages();
    this.reviews$ = this.getProductReviews();
  }
  getProductReviews(): Observable<Review[]> {
    return this.product$.pipe(
      switchMap((product) => {
        return this.reviewsService.getReviews(product.id);
      })
    );
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
}
