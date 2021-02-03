import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit',
})
export class LimitPipe implements PipeTransform {
  transform(value: string, limit: number = 100): string {
    if (value && value.length > limit) {
      const items = value.split(' ');
      let data = '';
      for(let item of items) {
        if(data.length + item.length < limit) {
          data = data + ' ' + item;
        } else {
          break;
        }
      }
      return data + '...';
    }
    return value;
  }
}
