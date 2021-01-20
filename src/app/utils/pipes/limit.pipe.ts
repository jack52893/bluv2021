import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit',
})
export class LimitPipe implements PipeTransform {
  transform(value: string, limit: number = 50): string {
    if (value && value.length > limit) {
      return value.substr(0, limit) + '...';
    }
    return value;
  }
}
