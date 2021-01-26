import { Observable } from 'rxjs';

export class Utils {
  public static getObservable<T>(value: T[], delay = true) {
    if (delay) {
      setTimeout(() => {
        const observable = new Observable<T[]>((observer) => {
          observer.next(value);
        });
        return observable;
      }, 1500);
    } else {
      const observable = new Observable<T[]>((observer) => {
        observer.next(value);
      });
      return observable;
    }
  }
}
