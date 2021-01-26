import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { Category } from '../category/category.model';
import { MainCategory } from './main-category.model';

@Injectable({
  providedIn: 'root',
})
export class MainCategoryService {
  private categories: MainCategory[] = [
    {
      id: '1',
      name: 'Beauty',
      description: 'Beauty',
      imageUrl: 'assets/images/categories/beauty/beauty.png',
    },
    {
      id: '2',
      name: 'Clothing',
      description: 'Clothing',
      imageUrl: 'assets/images/categories/clothing/clothing.png',
    },
    {
      id: '3',
      name: 'Electronics',
      description: 'Electronics',
      imageUrl: 'assets/images/categories/electronics/electronics.png',
    },
    {
      id: '4',
      name: 'Home',
      description: 'Home',
      imageUrl: 'assets/images/categories/home/home.png',
    },
    {
      id: '5',
      name: 'Sports',
      description: 'Sports',
      imageUrl: 'assets/images/categories/sports/sports.png',
    },
  ];
  constructor() {}

  getCategories(): Observable<MainCategory[]> {
    return Utils.getObservable(this.categories);
  }

  getSubCategories(id: string) {
    const categories: Category[] = [];
    switch (id) {
      case '1':
        categories.push({
          id: '1',
          name: 'Fragrance',
          description: 'Fragrance',
          imageUrl: 'assets/images/categories/beauty/fragrance/fragrance.png',
        });
        categories.push({
          id: '2',
          name: 'Hair Care',
          description: 'Hair Care',
          imageUrl: 'assets/images/categories/beauty/hair care/hair-care.png',
        });
        categories.push({
          id: '3',
          name: 'Makeup',
          description: 'Makeup',
          imageUrl: 'assets/images/categories/beauty/makeup/makeup.png',
        });
        categories.push({
          id: '4',
          name: 'Nail Care',
          description: 'Nail Care',
          imageUrl: 'assets/images/categories/beauty/nail care/nail-care.png',
        });
        categories.push({
          id: '5',
          name: 'Skin Care',
          description: 'Skin Care',
          imageUrl: 'assets/images/categories/beauty/skin care/skin-care.png',
        });
        break;
      case '2':
        categories.push({
          id: '1',
          name: 'Boys',
          description: 'Boys',
          imageUrl: 'assets/images/categories/clothing/boys/boys.png',
        });
        categories.push({
          id: '2',
          name: 'Girls',
          description: 'Girls',
          imageUrl: 'assets/images/categories/clothing/girls/girls.png',
        });
        categories.push({
          id: '3',
          name: 'Men',
          description: 'Men',
          imageUrl: 'assets/images/categories/clothing/men/men.png',
        });
        categories.push({
          id: '4',
          name: 'Women',
          description: 'Women',
          imageUrl: 'assets/images/categories/clothing/women/women.png',
        });
        break;
      case '3':
        categories.push({
          id: '1',
          name: 'Cell Phones',
          description: 'Cell Phones',
          imageUrl:
            'assets/images/categories/electronics/cell phones/cell-phones.png',
        });
        categories.push({
          id: '2',
          name: 'Computers',
          description: 'Computers',
          imageUrl:
            'assets/images/categories/electronics/computers/computers.png',
        });
        categories.push({
          id: '3',
          name: 'Televisions',
          description: 'Televisions',
          imageUrl:
            'assets/images/categories/electronics/televisions/televisions.png',
        });
        categories.push({
          id: '4',
          name: 'Video Game Consoles',
          description: 'Video Game Consoles',
          imageUrl:
            'assets/images/categories/electronics/video game consoles/video-game-consoles.png',
        });
        categories.push({
          id: '5',
          name: 'Wearable Technology',
          description: 'Wearable Technology',
          imageUrl:
            'assets/images/categories/electronics/wearable technology/wearable-technology.png',
        });
        break;
      case '4':
        categories.push({
          id: '1',
          name: 'Coffee Makers',
          description: 'Coffee Makers',
          imageUrl:
            'assets/images/categories/home/coffee makers/coffee-makers.png',
        });
        categories.push({
          id: '2',
          name: 'Kitchen',
          description: 'Kitchen',
          imageUrl: 'assets/images/categories/home/kitchen/kitchen.png',
        });
        categories.push({
          id: '3',
          name: 'Vacuums',
          description: 'Vacuums',
          imageUrl: 'assets/images/categories/home/vacuums/vacuums.png',
        });
        break;
      case '5':
        categories.push({
          id: '1',
          name: 'Sports Outdoors',
          description: 'Sports Outdoors',
          imageUrl:
            'assets/images/categories/sports/sports outdoors/sports-outdoors.png',
        });
        categories.push({
          id: '2',
          name: 'Sports Fitness',
          description: 'Sports Fitness',
          imageUrl:
            'assets/images/categories/sports/sports fitness/sports-fitness.png',
        });
        break;
    }
    return Utils.getObservable(categories.slice());
  }
}
