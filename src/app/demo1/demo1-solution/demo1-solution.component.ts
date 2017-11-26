import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-demo1-solution',
  templateUrl: './demo1-solution.component.html',
  styleUrls: ['./demo1-solution.component.css']
})
export class Demo1SolutionComponent implements OnInit, OnDestroy {
  value: number = 0;
  subscription: Subscription;
  valueProvider: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.valueProvider = Rx.Observable
      .interval(1000);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onStart() {
    this.valueProvider
      .subscribe(value => {
        this.value = value;
      });
  }

}
