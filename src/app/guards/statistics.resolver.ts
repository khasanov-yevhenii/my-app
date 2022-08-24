import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { StatisticsService } from '../services/statistics.service';

@Injectable({
  providedIn: 'root',
})
export class StatisticsResolver implements Resolve<number> {
  constructor(private statisticsService: StatisticsService) {}

  resolve(): Observable<number> {
    return this.statisticsService.geTotalAmount();
  }
}
