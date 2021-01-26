import { Component, OnInit } from '@angular/core';
import { MainCategory } from '../main-category/main-category.model';

@Component({
  selector: 'app-main-categories',
  templateUrl: './main-categories.component.html',
  styleUrls: ['./main-categories.component.css']
})
export class MainCategoriesComponent implements OnInit {

  categories: MainCategory[];
  
  constructor() { }

  ngOnInit(): void {
  }

}
