import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { FormControl } from '@angular/forms';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  @Output() sidenavToggle = new EventEmitter<void>();
  mobile = true;
  mobileSub: Subscription;
  cartItemsCount = null;
  search = new FormControl();
  options: string[] = [
    'option 1',
    'option 1',
    'option 1',
    'option 1',
    'option 1',
  ];
  filteredOptions: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.mobileSub = this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .subscribe((match) => (this.mobile = match.matches));
    this.mobile = this.breakpointObserver.isMatched(Breakpoints.XSmall);
    this.filteredOptions = this.search.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  onToggle() {
    this.sidenavToggle.emit();
  }

  ngOnDestroy() {
    if (this.mobileSub) {
      this.mobileSub.unsubscribe();
      this.mobileSub = null;
    }
  }
}
