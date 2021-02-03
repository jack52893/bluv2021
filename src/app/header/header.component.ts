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
import { startWith, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CartService } from '../cart/service/cart.service';
import { Breakpoint } from '../utils/ui/breakpoint.type';
import { BreakpointService } from '../utils/ui/service/breakpoint.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  cartItemsCount = null;
  form: FormGroup;
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  breakpoint: Breakpoint = 'xsmall';
  subscriptions: Subscription[] = [];

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  constructor(
    private router: Router,
    private cartService: CartService,
    private breakpointService: BreakpointService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(),
    });
    this.filteredOptions = this.form.get('search').valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
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

  onSubmit() {
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
    for(let subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
    this.subscriptions = undefined;
  }
}
