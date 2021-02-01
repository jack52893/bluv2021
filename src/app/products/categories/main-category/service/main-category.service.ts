import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { beautyCategories, clothingCategories, electronicsCategories, homeCategories, sportsCategories } from '../../category/service/category.data';
import { Category } from '../../category/service/category.model';
import { mainCategories } from './main-category.data';
import { MainCategory } from './main-category.model';

@Injectable({
  providedIn: 'root',
})
export class MainCategoryService {
  constructor() {}

  getMainCategories(): Observable<MainCategory[]> {
    return Utils.getObservable<MainCategory[]>(mainCategories.slice());
  }

  getSubCategories(id: string): Observable<Category[]> {
    let categories: Category[] = [];
    switch (id) {
      case '1':
        categories = beautyCategories.slice();
        break;
      case '2':
        categories = clothingCategories.slice();
        break;
      case '3':
        categories = electronicsCategories.slice();
        break;
      case '4':
        categories = homeCategories.slice();
        break;
      case '5':
        categories = sportsCategories.slice();
        break;
    }
    return Utils.getObservable<Category[]>(categories.slice());
  }
}
