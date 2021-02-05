import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import {
  beautyCategories,
  clothingCategories,
  electronicsCategories,
  homeCategories,
  sportsCategories,
} from '../../category/service/category.data';
import { Category } from '../../category/service/category.model';
import { mainCategoryCategories } from './main-category-categories.data';
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

  getCategories(id: string): Observable<string[]> {
    return Utils.getObservable<string[]>(
      mainCategoryCategories
        .filter((item) => item.mainCategoryId === id)
        .map((item) => item.categoryId)
    );
  }

  getMainCategory(id: string): Observable<MainCategory> {
    return Utils.getObservable<MainCategory>(
      mainCategories.find((item) => item.id === id)
    );
  }
}
