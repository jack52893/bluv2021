import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { Review } from './review.model';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  reviews: Review[] = [
    {
      id: '1',
      name: 'User1',
      title: 'Good Product With Quality and Price',
      rating: '4',
      content:
        'Product is good for every day use, speed, storage, and display. High quality graphics. And good value for price.',
    },
    {
      id: '3',
      name: 'User3',
      title: 'Good Product With Quality and Price',
      rating: '2',
      content:
        'Product is good for every day use, speed, storage, and display. High quality graphics. And good value for price.',
    },
    {
      id: '2',
      name: 'User2',
      title: 'Good Product With Quality and Price',
      rating: '5',
      content:
        'Product is good for every day use, speed, storage, and display. High quality graphics. And good value for price.',
    },
    {
      id: '4',
      name: 'User4',
      title: 'Good Product With Quality and Price',
      rating: '3',
      content:
        'Product is good for every day use, speed, storage, and display. High quality graphics. And good value for price.',
    },
    {
      id: '5',
      name: 'User5',
      title: 'Good Product With Quality and Price',
      rating: '2',
      content:
        'Product is good for every day use, speed, storage, and display. High quality graphics. And good value for price.',
    },
  ];
  constructor() {}

  getReviews(id: string): Observable<Review[]> {
    return Utils.getObservable(this.reviews.slice());
  }

  getRating(id: string) {
    const count = this.reviews.length;
    let sum = 0;
    for (let review of this.reviews) {
      sum += +review.rating;
    }
    return Math.round(sum);
  }
}
