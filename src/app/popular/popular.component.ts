import { Component, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  products: Product[] = [
    {id: '4', name: 'Laptop Dell Inspiron 350, 7th Intel Core, 2T SATA Storage, 21" Full HD Screen Display', description: 'Laptop Dell Inspiron 350', price: '2000', stock: '5', imageUrl: 'assets/images/products/product-4.jpg', images: [] },
    {id: '5', name: 'Laptop Dell Inspiron 450', description: 'Laptop Dell Inspiron 450', price: '650', stock: '0', imageUrl: 'assets/images/products/product-12.jpg', images: [] },
    {id: '6', name: 'Laptop Dell Inspiron 550', description: 'Laptop Dell Inspiron 550', price: '800', stock: '0', imageUrl: 'assets/images/products/product-6.jpg', images: [] },
    {id: '1', name: 'Pixel 2', description: 'Pixel 2', price: '500', stock: '3', imageUrl: 'assets/images/products/product-1.jpg', images: [] },
    {id: '2', name: 'Pixel 3', description: 'Pixel 3', price: '600', stock: '0', imageUrl: 'assets/images/products/product-2.jpg', images: [] },
    {id: '3', name: 'Pixel 4', description: 'Pixel 4', price: '700', stock: '0', imageUrl: 'assets/images/products/product-3.jpg', images: [] },
    {id: '7', name: 'LG Smart TV 56"', description: 'LG Smart TV 56"', price: '1500', stock: '4', imageUrl: 'assets/images/products/product-7.jpg', images: [] },
    {id: '8', name: 'LG Smart TV 70"', description: 'LG Smart TV 70"', price: '3500', stock: '1', imageUrl: 'assets/images/products/product-8.jpg', images: [] },
    {id: '9', name: 'LG Smart TV 70" 8K', description: 'LG Smart TV 70" 8K', price: '7500', stock: '1', imageUrl: 'assets/images/products/product-9.jpg', images: [] },
    {id: '10', name: 'Samsung Galaxy Tab S6', description: 'Samsung Galaxy Tab S6', price: '500', stock: '1', imageUrl: 'assets/images/products/product-10.jpg', images: [] },
    {id: '11', name: 'Samsung Galaxy Tab S8', description: 'Samsung Galaxy Tab S8', price: '550', stock: '3', imageUrl: 'assets/images/products/product-11.jpg', images: [] },
    {id: '12', name: 'Samsung Galaxy Tab A10', description: 'Samsung Galaxy Tab A10', price: '800', stock: '2', imageUrl: 'assets/images/products/product-12.jpg', images: [] },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
