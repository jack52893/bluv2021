import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { Deal } from './deal.model';

@Injectable({
  providedIn: 'root',
})
export class DealService {
  private deals: Deal[] = [
    {
      id: '1',
      imageUrl: 'assets/images/deals/deal-5.jpg',
      dealUrl: '/'
      // dealUrl: '/product/b96bdcd0-9c6f-4ede-8e58-54a258722272',
    },
    { id: '2', imageUrl: 'assets/images/deals/deal-2.jpg', dealUrl: '/' },
    { id: '3', imageUrl: 'assets/images/deals/deal-3.jpg', dealUrl: '/' },
  ];

  constructor() {}

  getDeals(): Observable<Deal[]> {
    return Utils.getObservable<Deal[]>(this.deals);
  }
}
