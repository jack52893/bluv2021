import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [
    {
      id: '1',
      name: 'Smart TVs',
      description: 'Smart TVs',
      imageUrl: 'assets/images/categories/category-1.jpg',
    },
    {
      id: '2',
      name: 'Laptops',
      description: 'Laptops',
      imageUrl: 'assets/images/categories/category-2.jpg',
    },
    {
      id: '3',
      name: 'Mobiles',
      description: 'Mobiles',
      imageUrl: 'assets/images/categories/category-3.jpg',
    },
    {
      id: '4',
      name: 'Mobiles',
      description: 'Mobile phones',
      imageUrl: 'assets/images/categories/category-4.jpg',
    },
    {
      id: '5',
      name: 'Tablets',
      description: 'Tablets',
      imageUrl: 'assets/images/categories/category-5.jpg',
    },
    {
      id: '6',
      name: 'Mobiles',
      description: 'Mobile phones',
      imageUrl: 'assets/images/categories/category-6.jpg',
    },
    {
      id: '7',
      name: 'Mobiles',
      description: 'Mobile phones',
      imageUrl: 'assets/images/categories/category-7.jpg',
    },
    {
      id: '8',
      name: 'Mobiles',
      description: 'Mobile phones',
      imageUrl: 'assets/images/categories/category-8.jpg',
    },
    {
      id: '9',
      name: 'Mobiles',
      description: 'Mobile phones',
      imageUrl: 'assets/images/categories/category-9.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
