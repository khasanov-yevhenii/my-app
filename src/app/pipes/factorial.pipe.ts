import {Pipe, PipeTransform} from '@angular/core';

import {factorial, memoizeFactorial} from '../utils/factorial';

@Pipe({
  name: 'appFactorial',
})
export class FactorialPipe implements PipeTransform {
  transform(value?: number): number {
    // console.log('FactorialPipe', value);
    // return value ? factorial(value) : 0;
    return value ? memoizeFactorial(value) : 0;
  }
}
