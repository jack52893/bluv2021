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
  form: FormGroup;
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

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      search: new FormControl(),
    });
    this.mobileSub = this.breakpointObserver
      .observe(Breakpoints.XSmall)
      .subscribe((match) => (this.mobile = match.matches));
    this.mobile = this.breakpointObserver.isMatched(Breakpoints.XSmall);
    this.filteredOptions = this.form.get('search').valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value))
    );
  }

  onSubmit() {
    const value = this.form.get('search').value;
    this.onSearch(value);
  }

  onSearch(value: string) {
    if (value && value !== '') {
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
    if (this.mobileSub) {
      this.mobileSub.unsubscribe();
      this.mobileSub = null;
    }
  }
}
