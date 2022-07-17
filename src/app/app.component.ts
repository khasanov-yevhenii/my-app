import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

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

  ngOnInit(): void {
    setTimeout(() => {
      // this.users.push({
      //   name: 'Ann',
      //   isAdmin: true,
      // });
      // this.users = [...this.users, {
      //   name: 'Ann',
      //   isAdmin: true,
      // }];
    }, 1000);
  }

  log(): void {
    console.log('log');
  }
}
