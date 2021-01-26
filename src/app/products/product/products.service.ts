import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    {
      id: '1',
      name:
        'Laptop Dell Inspiron 550, 7th Gen Intel Core 5GHz Quad, 2TB SATA Storage, 64G Memory',
      description: '',
      price: '3000',
      imageUrl: 'assets/images/products/product-12.jpg',
      images: [],
    },
    {
      id: '2',
      name:
        'Laptop Dell Inspiron 650, 7th Gen Intel Core 8GHz Quad, 2TB SATA Storage, 128G Memory',
      description: '',
      price: '8000',
      imageUrl: 'assets/images/products/product-7.jpg',
      images: [],
    },
    {
      id: '3',
      name:
        'Laptop Dell Inspiron 750, 7th Gen Intel Core 8GHz Quad, 2TB SATA Storage, 256G Memory',
      description: '',
      price: '10000',
      imageUrl: 'assets/images/products/product-4.jpg',
      images: [
        'assets/images/products/product-4.1.jpg',
        'assets/images/products/product-4.2.jpg',
        'assets/images/products/product-4.1.jpg',
        'assets/images/products/product-4.2.jpg',
        'assets/images/products/product-4.1.jpg',
        'assets/images/products/product-4.2.jpg',
        'assets/images/products/product-4.1.jpg',
        'assets/images/products/product-4.2.jpg',
        'assets/images/products/product-4.1.jpg',
        'assets/images/products/product-4.2.jpg',
        'assets/images/products/product-4.1.jpg',
        'assets/images/products/product-4.2.jpg',
      ],
    },
    {
      id: '4',
      name: 'Pixel 2, 6.5" 8K Display, 128G Memory',
      description: 'Pixel 2',
      price: '500',
      imageUrl: 'assets/images/products/product-3.jpg',
      images: [],
    },
    {
      id: '5',
      name: 'Pixel 3',
      description: 'Pixel 3',
      price: '600',
      imageUrl: 'assets/images/products/product-2.jpg',
      images: [],
    },
    {
      id: '6',
      name: 'Pixel 4',
      description: 'Pixel 4',
      price: '700',
      imageUrl: 'assets/images/products/product-3.jpg',
      images: [],
    },
    {
      id: '7',
      name: 'LG Smart TV 56"',
      description: 'LG Smart TV 56"',
      price: '1500',
      imageUrl: 'assets/images/products/product-1.jpg',
      images: [],
    },
    {
      id: '8',
      name: 'LG Smart TV 70"',
      description: 'LG Smart TV 70"',
      price: '3500',
      imageUrl: 'assets/images/products/product-1.jpg',
      images: [],
    },
    {
      id: '9',
      name: 'LG Smart TV 70" 8K',
      description: 'LG Smart TV 70" 8K',
      price: '7500',
      imageUrl: 'assets/images/products/product-1.jpg',
      images: [],
    },
    {
      id: '10',
      name:
        'Laptop Dell Inspiron 350, 7th Intel Core, 2T SATA Storage, 21" Full HD Screen Display',
      description: 'Laptop Dell Inspiron 350',
      price: '2000',
      imageUrl: 'assets/images/products/product-12.jpg',
      images: [],
    },
    {
      id: '11',
      name:
        'Laptop Dell Inspiron 750, 7th Gen Intel Core 8GHz Quad, 2TB SATA Storage, 256G Memory',
      description: 'Laptop Dell Inspiron 450',
      price: '650',
      imageUrl: 'assets/images/products/product-12.jpg',
      images: [],
    },
    {
      id: '12',
      name: 'Laptop Dell Inspiron 550',
      description: 'Laptop Dell Inspiron 550',
      price: '800',
      imageUrl: 'assets/images/products/product-12.jpg',
      images: [],
    },
    {
      id: '13',
      name: 'Pixel 2',
      description: 'Pixel 2',
      price: '500',
      imageUrl: 'assets/images/products/product-3.jpg',
      images: [],
    },
    {
      id: '14',
      name: 'Pixel 3',
      description: 'Pixel 3',
      price: '600',
      imageUrl: 'assets/images/products/product-3.jpg',
      images: [],
    },
    {
      id: '15',
      name: 'Pixel 4',
      description: 'Pixel 4',
      price: '700',
      imageUrl: 'assets/images/products/product-3.jpg',
      images: [],
    },
    {
      id: '16',
      name: 'LG Smart TV 56"',
      description: 'LG Smart TV 56"',
      price: '1500',
      imageUrl: 'assets/images/products/product-1.jpg',
      images: [],
    },
    {
      id: '17',
      name: 'LG Smart TV 70"',
      description: 'LG Smart TV 70"',
      price: '3500',
      imageUrl: 'assets/images/products/product-1.jpg',
      images: [],
    },
    {
      id: '18',
      name: 'LG Smart TV 70" 8K',
      description: 'LG Smart TV 70" 8K',
      price: '7500',
      imageUrl: 'assets/images/products/product-1.jpg',
      images: [],
    },
  ];

  constructor() {}

  getProducts(): Product[] {
    return [...this.products];
  }

  getProduct(id: string): Product {
    return this.products.filter((product) => product.id === id)[0];
  }

  getRelatedProducts(id: string): Product[] {
    return this.products.slice(5, 15);
  }

  getCustomersAlsoViewedProducts(id: string): Product[] {
    return this.products.slice(6, 16);
  }

  getMostSoldProducts(id: string): Product[] {
    return this.products.slice(8, 18);
  }

  searchProducts(query: string): Product[] {
    return this.products.filter((product) => {
      const sum = product.name.trim().toLowerCase() + product.description.trim().toLowerCase();
      const value = query.trim().toLowerCase();
      return sum.indexOf(value) >= 0;
    });
  }
}
