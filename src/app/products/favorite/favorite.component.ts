import { Component, Input, OnInit } from '@angular/core';
import { FavoriteService } from './service/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  @Input() id: string;

  favorite: boolean = false;

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit(): void {
    this.favoriteService.favoriteUpdated.subscribe((data) => {
      if (data.id === this.id) {
        this.favorite = data.favorite;
      }
    });
  }

  onFavorite() {
    this.favoriteService.favorite(this.id);
  }
}
