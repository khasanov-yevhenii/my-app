import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StatisticsService {
  geTotalAmount(): Observable<number> {
    return of(1300).pipe(delay(3000));
  }
}
