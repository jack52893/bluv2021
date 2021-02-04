import {
  beautyCategories,
  clothingCategories,
  electronicsCategories,
  homeCategories,
  sportsCategories,
} from './category.data';
import { Category } from './category.model';

export const categories: Category[] = [
  ...electronicsCategories,
  ...beautyCategories,
  ...clothingCategories,
  ...homeCategories,
  ...sportsCategories,
];
