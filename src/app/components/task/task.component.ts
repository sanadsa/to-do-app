import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoTask } from 'src/app/common/interfaces/ToDoTask';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: ToDoTask;
  @Output() taskDoneEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
