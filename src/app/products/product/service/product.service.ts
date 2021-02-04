import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { Product } from './product.model';
import { products } from './product.data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProduct(id: string): Observable<Product> {
    const item = products.find((product) => product.id === id);
    if (item) {
      return Utils.getObservable(item);
    }
    return Utils.getObservable(null);
  }

  getSomeProducts(): Observable<Product[]> {
    return Utils.getObservable(products);
  }

  getProducts(arr: string[]): Observable<Product[]> {
    return Utils.getObservable<Product[]>(
      products.filter((item) => arr.includes(item.id))
    );
  }

  getProductImages(id: string): Observable<string[]> {
    const images: string[] = [];
    const product = products.find((item) => item.id === id);
    if (product) {
      images.push(product.imageUrl);
      for (let image of product.images) {
        images.push(image);
      }
    }
    for (let image of Utils.getPreviewImages()) {
      images.push(image);
    }
    return Utils.getObservable<string[]>(images);
  }
}
