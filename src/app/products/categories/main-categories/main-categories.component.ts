import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs/operators';
import { MainCategory } from '../main-category/service/main-category.model';
import { MainCategoryService } from '../main-category/service/main-category.service';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css'],
})
export class MainCategoriesComponent implements OnInit {
  mainCategories: MainCategory[];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private mainCategoryService: MainCategoryService
  ) {}

  ngOnInit(): void {
    const mainCategory: MainCategory = {
      id: 'all-categories',
      name: 'All Categories',
      description: 'All Categories',
      imageUrl: '',
    };
    this.mainCategoryService.getMainCategories().subscribe((mainCategories) => {
      if(mainCategories.length > 3) {
        this.mainCategories = mainCategories.slice(0, 4);
      } else {
        this.mainCategories = mainCategories;
      }
    });
  }
}
