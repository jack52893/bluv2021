import { Component, OnInit } from '@angular/core';
import { Deal } from './deal.model';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css'],
})
export class DealsComponent implements OnInit {
  deals: Deal[] = [
    { id: '1', imageUrl: 'assets/images/deals/image-2.jpg' },
    { id: '2', imageUrl: 'assets/images/deals/image-4.jpg' },
    { id: '3', imageUrl: 'assets/images/deals/image-8.jpg' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
