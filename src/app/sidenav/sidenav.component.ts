import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { Category } from '../products/categories/category/service/category.model';
import { CategoryService } from '../products/categories/category/service/category.service';
import { MainCategory } from '../products/categories/main-category/service/main-category.model';
import { MainCategoryService } from '../products/categories/main-category/service/main-category.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent implements OnInit {
  mainCategories: MainCategory[];
  mainCategory: MainCategory = null;
  categories: Category[] = [];

  subscriptions: Subscription[] = [];

  @Output() sidenavClose = new EventEmitter<void>();

  constructor(
    private mainCategoryService: MainCategoryService,
    private categoryService: CategoryService
  ) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.mainCategoryService
        .getMainCategories()
        .subscribe((mainCategories) => {
          this.mainCategories = mainCategories;
        })
    );
  }

  onMainCategory(mainCategory: MainCategory) {
    this.mainCategory = mainCategory;
    this.mainCategoryService
      .getCategories(mainCategory.id)
      .pipe(
        switchMap((val) => {
          return this.categoryService.getCategories(val);
        }),
        take(1)
      )
      .subscribe((categories) => {
        console.log(categories);
        this.categories = categories;
      });
  }

  onLogout() {
    this.onClose();
  }

  onClose() {
    this.sidenavClose.emit();
  }
}
