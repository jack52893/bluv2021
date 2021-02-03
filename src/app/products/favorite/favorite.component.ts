import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FavoriteService } from './service/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit, OnDestroy {
  @Input() id: string;
  subscriptions: Subscription[] = [];

  favorite: boolean = false;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.subscriptions.push(
      this.favoriteService.favoriteUpdated.subscribe((data) => {
        if (data.id === this.id) {
          this.favorite = data.favorite;
        }
      })
    );
  }

  onFavorite() {
    this.favoriteService.favorite(this.id);
  }

  ngOnDestroy() {
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
