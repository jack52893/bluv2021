import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { DiscountService } from '../discount/service/discount.service';
import { ProductService } from '../product/service/product.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css'],
})
export class PriceComponent implements OnInit, OnDestroy {
  @Input() id: string;
  @Input() price: string;
  @Input() priceAfterDiscount: string;
  discount = false;
  subscriptions: Subscription[] = [];

  constructor(
    private productService: ProductService,
    private discountService: DiscountService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.productService
        .getProduct(this.id)
        .pipe(
          switchMap((product) => {
            this.price = product.price;
            return this.discountService.getPriceAfterDiscount(this.id);
          })
        )
        .subscribe((priceAfterDiscount) => {
          this.priceAfterDiscount = priceAfterDiscount;
          if (+this.priceAfterDiscount < +this.price) {
            this.discount = true;
          }
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
