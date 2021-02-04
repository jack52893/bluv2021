import { Observable } from 'rxjs';

export class Utils {
  public static getPreviewImages(): string[] {
    const images: string[] = [
      'assets/images/preview/image-1.jpg',
      'assets/images/preview/image-2.jpg',
      'assets/images/preview/image-3.jpg',
      'assets/images/preview/image-4.jpg',
      'assets/images/preview/image-5.jpg',
    ];

    return images;
  }
  public static getPromise<T>(value: T, delay = true) {
    const promise = new Promise<T>((resolve, reject) => {
      if (delay) {
        setTimeout(() => {
          resolve(value);
        }, 1500);
      } else {
        resolve(value);
      }
    });
    return promise;
  }
  public static getObservable<T>(value: T, delay = true) {
    const observable = new Observable<T>((observer) => {
      if (delay) {
        setTimeout(() => {
          observer.next(value);
        }, 100);
      } else {
        observer.next(value);
      }
    });
    return observable;
  }
  public static getValueForPercentage(value: number, percentage: number): number {
    return Math.floor(((100 - +percentage) * +value) / 100);
  }
}
