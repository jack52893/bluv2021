import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/product.model';
import { ProductsService } from '../product/products.service';
import { FilterComponent } from './filter/filter.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  products: Product[];
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(),
    });
    this.route.params.subscribe((params) => {
      const query = params['query'];
      this.form.setValue({
        search: query,
      });
      this.products = this.productsService.searchProducts(query);
    });
  }

  onFilter() {
    const dialg = this.dialog.open(FilterComponent);
  }
}
