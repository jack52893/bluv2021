import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReviewsService } from '../review/reviews.service';
import { Product } from './product.model';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  product: Product;
  favorite = false;
  bestSeller = false;
  rating = 5;
  reviews = [];
  relatedProducts: Product[];
  customersAlsoViewedProducts: Product[];

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private reviewsService: ReviewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.product = this.productsService.getProduct(id);
      this.reviews = this.reviewsService.getReviews(id);
      this.rating = this.reviewsService.getRating(id);
      this.relatedProducts = this.productsService.getRelatedProducts(id);
      this.customersAlsoViewedProducts = this.productsService.getCustomersAlsoViewedProducts(id);
    });
  }

  get productImages() {
    const images: string[] = [];
    if (this.product && this.product.imageUrl && this.product.images) {
      images.push(this.product.imageUrl);
      for (let i of this.product.images) {
        images.push(i);
      }
    }
    return images;
  }
}
