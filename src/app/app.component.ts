import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperatureConverter',
})
export class ConvertPipe implements PipeTransform {
  transform(value: number) {
    if (value && !isNaN(value)) {
      var tempareature = ((value - 32) * 5) / 9;
      return tempareature.toFixed(2);
    }
    return;
  }
}
