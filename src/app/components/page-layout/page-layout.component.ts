import { Component, OnInit } from '@angular/core';
import { ToDoTask } from 'src/app/common/interfaces/ToDoTask';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  tasks: ToDoTask[] = [
    { text:'Do a to do app', isCompleted: false},
    { text:'Another task', isCompleted: false}
  ];

  constructor() {
    // get tasks...
  }

  ngOnInit(): void {
  }

}
