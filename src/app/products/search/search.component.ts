import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
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
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
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
    let width = '100%';
    let height = '100%';
    let maxWidth = '600px';
    let maxHeight = '700px';
    if (this.breakpointObserver.isMatched(Breakpoints.XSmall)) {
      width = '100%';
      height = '100%';
      maxWidth = '100vw';
      maxHeight = '100vh';
    }
    const dialg = this.dialog.open(FilterComponent, {
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      height: height,
      width: width,
    });
  }
}
