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
    const item = favoriteProducts.find((product) => product.id === id);
    if (item) {
      item.favorite = !item.favorite;
      this.favoriteUpdated.next({ id: id, favorite: item.favorite });
    }
  }
  getFavorite(id: string): Observable<boolean> {
    const item = favoriteProducts.find(product => product.id === id);
    if(item) {
      return Utils.getObservable<boolean>(item.favorite);
    }
    return Utils.getObservable<boolean>(false);
  }
}

export interface FavoriteData {
  id: string;
  favorite: boolean;
}
