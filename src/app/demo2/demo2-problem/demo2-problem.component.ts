import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-demo2-problem',
  templateUrl: './demo2-problem.component.html',
  styleUrls: ['./demo2-problem.component.css']
})
export class Demo2ProblemComponent implements OnInit {

  constructor() { }

  person: Person = new Person('benoit', 'paul');

  ngOnInit() {
  }

  onChangeProperties() {
    this.person.firstName = 'another firstName - property';
    this.person.lastName = 'another lastName - property';
  }

  onChangeObject() {
    this.person = new Person('another first name - object', 'another last name - object');
  }

}
