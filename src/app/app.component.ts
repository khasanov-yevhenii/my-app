import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavigationCancel, Router} from '@angular/router';

const USERS = [
  {
    name: 'John',
    isAdmin: false,
    num: 5,
  },
  {
    name: 'Sam',
    isAdmin: true,
    num: 5,
  },
  {
    name: 'Kate',
    isAdmin: true,
    num: 7,
  },
  {
    name: 'User4',
    isAdmin: true,
    num: 7,
  },
  {
    name: 'User5',
    isAdmin: true,
    num: 10,
  },
  {
    name: 'User6',
    isAdmin: true,
    num: 7,
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit {
  public testNum = 7;
  public name = '';
  public users = USERS;
  public color = '';
  public condition = false;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationCancel) {
        console.log('redirect canceled');
      }
    })
  }

  log(): void {
    console.log('log');
  }
}
