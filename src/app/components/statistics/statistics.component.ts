import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  public amount!: number;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    // console.log(this.route.snapshot.data['amount']);
    this.amount = this.route.snapshot.data['amount'];
  }
}
