import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Utils } from '../../utils';
import { Breakpoint } from '../breakpoint.type';

@Injectable({ providedIn: 'root' })
export class BreakpointService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  getBreakpoint(): Observable<Breakpoint> {
    return this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(
        switchMap((data) => {
          if (data.breakpoints[Breakpoints.XSmall])
            return Utils.getObservable<Breakpoint>('xsmall');
          if (data.breakpoints[Breakpoints.Small])
            return Utils.getObservable<Breakpoint>('small');
          if (data.breakpoints[Breakpoints.Medium])
            return Utils.getObservable<Breakpoint>('medium');
          if (data.breakpoints[Breakpoints.Large])
            return Utils.getObservable<Breakpoint>('large');
          if (data.breakpoints[Breakpoints.XLarge])
            return Utils.getObservable<Breakpoint>('xlarge');
          return Utils.getObservable<Breakpoint>('xsmall');
        })
      );
  }
}
