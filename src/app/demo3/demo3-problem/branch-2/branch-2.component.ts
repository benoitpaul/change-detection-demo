import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-branch-2',
  templateUrl: './branch-2.component.html',
  styleUrls: ['./branch-2.component.css']
})
export class Branch2Component implements OnInit, DoCheck {

  constructor() { }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log('branch 2 - DoCheck');
  }
}
