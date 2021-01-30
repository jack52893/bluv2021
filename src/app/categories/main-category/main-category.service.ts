import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { beautyCategories, clothingCategories, electronicsCategories, homeCategories, sportsCategories } from '../category/category.data';
import { Category } from '../category/category.model';
import { mainCategories } from './main-category.data';
import { MainCategory } from './main-category.model';

@Injectable({
  providedIn: 'root',
})
export class MainCategoryService {

  constructor() {}

  getCategories(): Observable<MainCategory[]> {
    return Utils.getObservable(mainCategories.slice());
  }

  getSubCategories(id: string) {
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
    return Utils.getObservable(categories.slice());
  }
}
