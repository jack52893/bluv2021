import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Utils } from 'src/app/utils/utils';
import { favoriteProducts } from './favorite.data';

@Injectable({ providedIn: 'root' })
export class FavoriteService {
  favoriteUpdated = new BehaviorSubject<FavoriteData>({
    id: '',
    favorite: false,
  });
  favorite(id: string) {
    const data = favoriteProducts.filter((product) => product.id === id);
    if (data && data.length > 0) {
      data[0].favorite = !data[0].favorite;
      this.favoriteUpdated.next({ id: id, favorite: data[0].favorite });
    }
  }
}

export interface FavoriteData {
  id: string;
  favorite: boolean;
}
