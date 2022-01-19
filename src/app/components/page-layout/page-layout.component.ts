import { Component, OnInit } from '@angular/core';
import { ToDoTask } from 'src/app/common/interfaces/ToDoTask';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrls: ['./page-layout.component.scss']
})
export class PageLayoutComponent implements OnInit {
  tasks: ToDoTask[] = [
    { id: 1, text: 'Do a to do app', isCompleted: false },
    { id: 2, text: 'Another task', isCompleted: false }
  ];
  taskToAdd: string = '';
  isShowCompleted: boolean = false;

  constructor() {
    // get tasks...
  }

  ngOnInit(): void {
  }

  addTask() {
    this.tasks.push({
      id: this.tasks[this.tasks.length - 1].id + 1,
      text: this.taskToAdd,
      isCompleted: false
    });
    this.taskToAdd = '';
  }

  taskDone(task: ToDoTask) {
    const index = this.tasks.indexOf(task);
    this.tasks[index].isCompleted = true;
  }

}
