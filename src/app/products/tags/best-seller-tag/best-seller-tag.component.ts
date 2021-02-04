import { Component, Input, OnInit } from '@angular/core';
import { Size } from 'src/app/utils/ui/size.type';

@Component({
  selector: 'app-best-seller-tag',
  templateUrl: './best-seller-tag.component.html',
  styleUrls: ['./best-seller-tag.component.css']
})
export class BestSellerTagComponent implements OnInit {

  @Input() size: Size = 'xsmall';

  constructor() { }

  ngOnInit(): void {
  }

}
