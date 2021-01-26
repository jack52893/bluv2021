import { Injectable } from '@angular/core';
import { utils } from 'protractor';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { Deal } from './deal/deal.model';

@Injectable({
  providedIn: 'root',
})
export class DealService {
  private deals: Deal[] = [
    { id: '1', imageUrl: 'assets/images/deals/image-2.jpg' },
    { id: '2', imageUrl: 'assets/images/deals/image-4.jpg' },
    { id: '3', imageUrl: 'assets/images/deals/image-8.jpg' },
  ];

  constructor() {}

  getDeals(): Observable<Deal[]> {
    return Utils.getObservable(this.deals.slice());
  }
}
