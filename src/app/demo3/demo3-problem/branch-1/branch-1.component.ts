import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-branch-1',
  templateUrl: './branch-1.component.html',
  styleUrls: ['./branch-1.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Branch1Component implements OnInit, OnDestroy {
  minute$: Observable<number>;
  currentMinute: number;
  subscription: Subscription;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.minute$ = Observable.interval(1000)
      .startWith(0)
      .filter(val => !val || (new Date()).getSeconds() === 0)
      .map(() => (new Date()).getMinutes());

    this.subscription = this.minute$.subscribe((minute) => {
      this.currentMinute = minute;
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
