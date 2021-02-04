import { Review } from '../../review/service/review.model';
import { Product } from './product.model';

export interface ProductComponentData {
  product: Product;
  productImages: string[];
  reviews: Review[];
  favorite: boolean;
  bestSeller: boolean;
  priceAfterDiscount: string;
  relatedProducts: Product[];
  customersViewedProducts: Product[];
  recommendedProducts: Product[];
  viewedProducts: Product[];
}
