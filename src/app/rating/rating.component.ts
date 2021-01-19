import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent implements OnInit {
  @Input() rating = 5;
  count = Array(5);
  @Input() reviews = 1;
  @Input() showReviews = true;

  constructor() {}

  ngOnInit(): void {}
}
