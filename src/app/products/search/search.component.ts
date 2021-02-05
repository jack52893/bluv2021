import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product/service/product.model';
import { FilterComponent } from './filter/filter.component';
import { Subscription } from 'rxjs';
import { SearchService } from './service/search.service';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../product/service/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  form: FormGroup;
  options: string[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private searchService: SearchService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(),
    });
    this.route.params.subscribe((params) => {
      const value = params['value'];
      this.form.setValue({
        search: value,
      });
      this.search(value);
    });
  }

  search(val: string) {
    this.options = [];
    this.subscriptions.push(
      this.searchService
        .searchProducts(val)
        .pipe(
          switchMap((data) => {
            return this.productService.getProducts(data);
          })
        )
        .subscribe((products) => {
          this.products = products;
        })
    );
  }

  onInput(val: string) {
    this.options = [];
    this.subscriptions.push(
      this.searchService
        .searchProducts(val)
        .pipe(
          switchMap((data) => {
            return this.productService.getProducts(data);
          })
        )
        .subscribe((products) => {
          for (let product of products) {
            this.options.push(product.name);
          }
        })
    );
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

  onSubmit() {
    const value = this.form.get('search').value;
    this.onSearch(value);
  }

  onSearch(value: string) {
    this.options = [];
    if (value && value !== '') {
      this.search(value);
    }
  }

  onOptionSelected(value: string) {
    this.search(value);
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
