import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring',
  standalone: true,
})
export class SubstringPipe implements PipeTransform {
  transform(value: string, index: number): unknown {
    if (value.length > index) {
      return value.substring(0, index) + '...';
    }
    return value;
  }
}
