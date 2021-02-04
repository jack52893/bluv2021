import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, map, switchMap, take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CartService } from '../cart/service/cart.service';
import { Breakpoint } from '../utils/ui/breakpoint.type';
import { BreakpointService } from '../utils/ui/service/breakpoint.service';
import { SearchService } from '../products/search/service/search.service';
import { ProductService } from '../products/product/service/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  cartItemsCount = null;
  form: FormGroup;
  breakpoint: Breakpoint = 'xsmall';
  options: string[] = [];
  subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private cartService: CartService,
    private breakpointService: BreakpointService,
    private searchService: SearchService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(),
    });
    this.subscriptions.push(
      this.cartService.cartItemsUpdated.subscribe((cart) => {
        this.cartItemsCount = cart.items.length;
      })
    );
    this.subscriptions.push(
      this.breakpointService.getBreakpoint().subscribe((breakpoint) => {
        this.breakpoint = breakpoint;
      })
    );
  }

  onInput(value: string) {
    this.options = [];
    this.searchService
      .searchProducts(value)
      .pipe(
        switchMap((val) => {
          return this.productService.getProducts(val);
        })
      )
      .subscribe((products) => {
        products.slice(0, 10).forEach((product) => {
          this.options.push(product.name);
        });
      });
  }

  onSubmit() {
    this.options = [];
    const value = this.form.get('search').value;
    this.onSearch(value);
  }

  onSearch(value: string) {
    if (value && value !== '') {
      this.form.reset();
      this.router.navigateByUrl('/search/' + value);
    }
  }

  onOptionSelected(value: string) {
    this.onSearch(value);
  }

  onToggle() {
    this.sidenavToggle.emit();
  }

  ngOnDestroy() {
    for (let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
