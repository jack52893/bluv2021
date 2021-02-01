import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Deal } from './deal/service/deal.model';
import { DealService } from './deal/service/deal.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent implements OnInit {
  deals$: Observable<Deal[]>;
  mobile = true;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dealService: DealService
  ) {}

  ngOnInit(): void {
    this.deals$ = this.dealService.getDeals();
    this.breakpointObserver.observe(Breakpoints.XSmall).subscribe((value) => {
      this.mobile = value.matches;
    });
  }
}
