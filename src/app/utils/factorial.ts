import * as _ from 'lodash';

export function factorial(n: number): number {
  // console.log('factorial', n)
  let factorial = 1;

  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

export const memoizeFactorial = _.memoize(factorial);
