import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Category } from '../category/service/category.model';
import { CategoryService } from '../category/service/category.service';
import { MainCategory } from './service/main-category.model';
import { MainCategoryService } from './service/main-category.service';

@Component({
  selector: 'app-main-category',
  templateUrl: './main-category.component.html',
  styleUrls: ['./main-category.component.css'],
})
export class MainCategoryComponent implements OnInit {
  mainCategory: MainCategory;
  categories: Category[];

  constructor(
    private route: ActivatedRoute,
    private mainCategoryService: MainCategoryService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    let id = '';
    this.route.queryParams
      .pipe(
        switchMap((queryParams) => {
          id = queryParams['id'];
          return this.mainCategoryService.getMainCategory(id);
        }),
        switchMap((mainCategory) => {
          this.mainCategory = mainCategory;
          return this.mainCategoryService.getCategories(id);
        }),
        switchMap((val) => {
          return this.categoryService.getCategories(val);
        })
      )
      .subscribe((categories) => {
        this.categories = categories;
      });
  }
}
