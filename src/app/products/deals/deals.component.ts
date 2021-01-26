import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DealService } from './deal.service';
import { Deal } from './deal/deal.model';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent implements OnInit, OnDestroy {
  deals: Deal[];
  dealSubscription: Subscription;

  constructor(private dealService: DealService) {}

  ngOnInit(): void {
    this.dealSubscription = this.dealService.getDeals().subscribe(deals => {
      this.deals = deals;
    });
  }

  ngOnDestroy() {
    if(this.dealSubscription) {
      this.dealSubscription.unsubscribe();
      this.dealSubscription = undefined;
    }
  }
}
