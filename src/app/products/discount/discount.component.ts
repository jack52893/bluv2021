import { Component, Input, OnInit } from '@angular/core';
import { DiscountService } from './service/discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css'],
})
export class DiscountComponent implements OnInit {
  @Input() id: string;
  discount: string;

  constructor(private discountService: DiscountService) {}

  ngOnInit(): void {
    this.discountService.getDiscount(this.id).subscribe((discount) => {
      this.discount = discount;
    });
  }
}
