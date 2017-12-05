import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TabsModule } from 'ngx-bootstrap/tabs';


import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo1ProblemComponent } from './demo1/demo1-problem/demo1-problem.component';
import { Demo1SolutionComponent } from './demo1/demo1-solution/demo1-solution.component';
import { Demo2Component } from './demo2/demo2.component';
import { Demo2ProblemComponent } from './demo2/demo2-problem/demo2-problem.component';
import { Demo3Component } from './demo3/demo3.component';
import { Demo3ProblemComponent } from './demo3/demo3-problem/demo3-problem.component';
import { Branch1Component } from './demo3/demo3-problem/branch-1/branch-1.component';
import { Branch2Component } from './demo3/demo3-problem/branch-2/branch-2.component';


@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    Demo1ProblemComponent,
    Demo1SolutionComponent,
    Demo2Component,
    Demo2ProblemComponent,
    Demo3Component,
    Demo3ProblemComponent,
    Branch1Component,
    Branch2Component
  ],
  imports: [
    BrowserModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
