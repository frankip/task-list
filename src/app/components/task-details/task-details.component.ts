import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/task';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {

  @Input() task: Task;
  @Output() isComplete = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  goalComplete(complete: boolean){
   this.isComplete.emit(complete);
  }

}
