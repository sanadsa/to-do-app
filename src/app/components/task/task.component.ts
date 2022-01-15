import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() text: string = '';
  @Input() isCompleted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
