import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductService } from '../../product/service/product.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private prodctService: ProductService) {}

  searchProducts(val: string): Observable<string[]> {
    return this.prodctService.getSomeProducts().pipe(
      map((products) => {
        const values = val.split(' ');

        const data: string[] = [];
        products.forEach((item) => {
          // if(item.name.split(' ').join().trim().toLowerCase().indexOf(value) >= 0 ) {
          //   data.push(item.id);
          // }
        });
        return data;
      })
    );
  }
}
