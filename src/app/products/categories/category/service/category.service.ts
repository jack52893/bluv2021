import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/products/product/service/product.model';
import { Utils } from 'src/app/utils/utils';
import { mainCategoryCategories } from '../../main-category/service/main-category-categories.data';
import { categories } from './categories.data';
import { categoryProducts } from './category-products.data';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getCategory(id: string): Observable<Category> {
    const item = categories.find((item) => item.id === id);
    if (item) {
      return Utils.getObservable<Category>(item);
    }
    return Utils.getObservable<Category>(null);
  }

  getCategories(val: string[]): Observable<Category[]> {
    const data = categories.filter(category => val.includes(category.id));
    return Utils.getObservable<Category[]>(
      categories.filter((category) => {
        return val.includes(category.id);
      })
    );
  }

  getProducts(id: string): Observable<string[]> {
    const products = categoryProducts
      .filter((item) => item.categoryId === id)
      .map((item) => item.productId);
    return Utils.getObservable<string[]>(products);
  }
}
