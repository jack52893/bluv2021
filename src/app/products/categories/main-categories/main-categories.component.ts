import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainCategory } from '../main-category/service/main-category.model';
import { MainCategoryService } from '../main-category/service/main-category.service';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css'],
})
export class MainCategoriesComponent implements OnInit, OnDestroy {
  mainCategories: MainCategory[];
  subscriptions: Subscription[] = [];

  constructor(private mainCategoryService: MainCategoryService) {}

  ngOnInit(): void {
    const mainCategory: MainCategory = {
      id: 'all-categories',
      name: 'All Categories',
      description: 'All Categories',
      imageUrl: '',
    };
    this.subscriptions.push(
      this.mainCategoryService
        .getMainCategories()
        .subscribe((mainCategories) => {
          if (mainCategories.length > 3) {
            this.mainCategories = mainCategories.slice(0, 4);
          } else {
            this.mainCategories = mainCategories;
          }
        })
    );
  }

  ngOnDestroy() {
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
