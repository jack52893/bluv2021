import { Component, Input, OnInit } from '@angular/core';
import { Review } from './review.model';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() review: Review;
  constructor() { }

  ngOnInit(): void {
  }

}
