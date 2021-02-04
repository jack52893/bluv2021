import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from '../product/service/product.model';
import { PopularProductsService } from './service/popular-products.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css'],
})
export class PopularComponent implements OnInit, OnDestroy {
  popularProducts: Product[];
  subscriptions: Subscription[] = [];

  constructor(private popularProductsService: PopularProductsService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.popularProductsService.getPopularProducts().subscribe((products) => {
        this.popularProducts = products;
      })
    );
  }

  ngOnDestroy() {
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
