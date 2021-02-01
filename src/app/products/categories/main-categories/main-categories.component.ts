import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MainCategory } from '../main-category/service/main-category.model';
import { MainCategoryService } from '../main-category/service/main-category.service';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css'],
})
export class MainCategoriesComponent implements OnInit {
  mainCategories$: Observable<MainCategory[]>;

  constructor(private mainCategoryService: MainCategoryService) {}

  ngOnInit(): void {
    const mainCategory: MainCategory = {
      id: 'all-categories',
      name: 'All Categories',
      description: 'All Categories',
      imageUrl: '',
    };
    this.mainCategories$ = this.mainCategoryService.getMainCategories().pipe(map((mainCategories: MainCategory[]) => {
      mainCategories.push(mainCategory);
      return mainCategories;
    }));
  }
}
