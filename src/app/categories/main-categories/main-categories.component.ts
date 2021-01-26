import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainCategory } from '../main-category/main-category.model';
import { MainCategoryService } from '../main-category/main-category.service';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent implements OnInit, OnDestroy {

  categories: MainCategory[] = [];
  mainCategoriesSubscription: Subscription;

  constructor(private mainCategoryService: MainCategoryService) { }

  ngOnInit(): void {
    this.mainCategoriesSubscription = this.mainCategoryService.getCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

  ngOnDestroy() {
    if(this.mainCategoriesSubscription) {
      this.mainCategoriesSubscription.unsubscribe();
      this.mainCategoriesSubscription = undefined;
    }
  }

}
