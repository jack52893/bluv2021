import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  title = 'Best Seller';

  @Input() type: 'best-seller';

  constructor() {}

  ngOnInit(): void {
    switch (this.type) {
      case 'best-seller':
        this.title = 'Best Seller';
        break;
      default:
        this.title = 'Best Seller';
    }
  }
}
