import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log(' - ChildComponent.constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(' - ChildComponent.ngOnChanges');
  }

  ngOnInit(): void {
    console.log(' - ChildComponent.ngOnInit');
  }

  ngDoCheck() {
    console.log(' - ChildComponent.ngDoCheck');
  }


  ngAfterContentInit() {
    console.log(' - ChildComponent.ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log(' - ChildComponent.ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log(' - ChildComponent.ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log(' - ChildComponent.ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log(' - ChildComponent.ngOnDestroy');
  }
}
