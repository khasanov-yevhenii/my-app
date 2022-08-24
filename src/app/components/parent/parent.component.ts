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
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  constructor() {
    console.log('ParentComponent.constructor');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ParentComponent.ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ParentComponent.ngOnInit');
  }

  ngDoCheck() {
    console.log('ParentComponent.ngDoCheck');
  }


  ngAfterContentInit() {
    console.log('ParentComponent.ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('ParentComponent.ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('ParentComponent.ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('ParentComponent.ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ParentComponent.ngOnDestroy');
  }
}
