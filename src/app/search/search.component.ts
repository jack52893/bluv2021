import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductsService } from '../product/products.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  products: Product[];

  constructor(private route: ActivatedRoute,
    private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const query = params['query'];
      this.products = this.productsService.searchProducts(query);
    })
  }

}
