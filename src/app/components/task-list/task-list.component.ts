import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks: Task[] = [
    new Task(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son'),
    new Task(2,'Buy Cookies','I have to buy cookies for the parrot'),
    new Task(3,'Get new Phone Case','Diana has her birthday coming up soon'),
    new Task(4,'Get Dog Food','Pupper likes expensive snacks'),
    new Task(5,'Solve math homework','Damn Math'),
    new Task(6,'Plot my world domination plan','Cause I am an evil overlord'),
  ];

  toggleDetails(i: number){
    this.tasks[i].showDescription = !this.tasks[i].showDescription

    console.log("This is displayed", this.tasks[i].showDescription)
  }

  completeTask(isComplete, index){
    if (isComplete) {
      this.tasks.splice(index,1);
    }
  }


}
