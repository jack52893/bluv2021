import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DiscountService } from './service/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
})
export class DiscountComponent implements OnInit, OnDestroy {
  @Input() id: string;
  discount: string;
  subscriptions: Subscription[] = [];

  constructor(private discountService: DiscountService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.discountService.getDiscount(this.id).subscribe((discount) => {
        this.discount = discount;
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
