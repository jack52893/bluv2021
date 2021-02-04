import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Breakpoint } from 'src/app/utils/ui/breakpoint.type';
import { BreakpointService } from 'src/app/utils/ui/service/breakpoint.service';
import { Size } from 'src/app/utils/ui/size.type';
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
  @Input() size: Size = 'xsmall';

  constructor(
    private favoriteService: FavoriteService,
    private breakpointService: BreakpointService
  ) {}

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
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
