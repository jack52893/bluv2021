import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Product } from '../../product/service/product.model';
import { ProductService } from '../../product/service/product.service';
import { Category } from './service/category.model';
import { CategoryService } from './service/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  category: Category;
  products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        switchMap((queryParams) => {
          const id = queryParams['id'];
          return this.categoryService.getCategory(id);
        })
      )
      .pipe(
        switchMap((category) => {
          this.category = category;
          return this.categoryService.getProducts(category.id);
        }),
        switchMap((val) => {
          return this.productService.getProducts(val);
        })
      )
      .subscribe((products) => {
        this.products = products;
        console.log(products);
      });
  }
}
