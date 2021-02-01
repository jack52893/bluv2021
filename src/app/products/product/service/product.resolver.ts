import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Injectable({ providedIn: 'root'})
export class ProductResolver implements Resolve<Product> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Product> | Promise<Product> | Product {
    return this.productService.getProduct(route.params['id']).pipe(first());
  }
}
