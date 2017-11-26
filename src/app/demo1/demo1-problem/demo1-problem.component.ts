import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo1-problem',
  templateUrl: './demo1-problem.component.html',
  styleUrls: ['./demo1-problem.component.css']
})
export class Demo1ProblemComponent implements OnInit {

  isStarted: boolean = false;
  value = 0;

  constructor() { }

  ngOnInit() {
  }

  onStart() {
    this.isStarted = true;
  }

  getValue() {
    if (this.isStarted) {
      return ++this.value;
    }
    else {
      return 0;
    }
  }
}
