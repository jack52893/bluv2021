import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { MainCategory } from './main-category.model';

@Injectable({
  providedIn: 'root',
})
export class MainCategoryService {
  private categories: MainCategory[] = [
    {
      id: '1',
      name: 'Beauty',
      description: 'Beauty',
      imageUrl: 'assets/images/categories/beauty/beauty.png',
    },
    {
      id: '2',
      name: 'Clothing',
      description: 'Clothing',
      imageUrl: 'assets/images/categories/clothing/clothing.png',
    },
    {
      id: '3',
      name: 'Electronics',
      description: 'Electronics',
      imageUrl: 'assets/images/categories/electronics/electronics.png',
    },
    {
      id: '4',
      name: 'Home',
      description: 'Home',
      imageUrl: 'assets/images/categories/home/home.png',
    },
    {
      id: '5',
      name: 'Sports',
      description: 'Sports',
      imageUrl: 'assets/images/categories/sports/sports.png',
    },
  ];
  constructor() {}

  getCategories(): Observable<MainCategory[]> {
    return Utils.getObservable(this.categories);
  }
}
