import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating = 5;
  count = Array(5);
  @Input() reviews;

  constructor() {}

  ngOnInit(): void {
    if (this.rating > 5) {
      this.rating = 5;
    }
    if (this.rating < 0) {
      this.rating = 0;
    }
  }
}
