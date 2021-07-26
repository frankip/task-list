import { Component, OnInit } from '@angular/core';
import { GoalServiceService } from 'src/app/goal-service.service';
import { Task } from 'src/app/task';
import { Quote  } from 'src/app/quote-class/quote';
import { HttpClient } from '@angular/common/http';
import { QuoteRequestService } from 'src/app/quote-http/quote-request.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  
  tasks:Task[];
  quote: Quote;
  
  constructor(taskService:GoalServiceService, private httpService:HttpClient, private quoteService: QuoteRequestService) {
    this.tasks = taskService.getTasks()
   }

  ngOnInit(): void {
    this.quoteService.quoteRequest()
    this.quote = this.quoteService.quote

  }


  toggleDetails(i: number){
    this.tasks[i].showDescription = !this.tasks[i].showDescription

    console.log("This is displayed", this.tasks[i].showDescription)
  }

  completeTask(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.tasks[index].name}?`)
      if(toDelete){
        this.tasks.splice(index,1);

      }
    }
  }

  updateTotalVotes(votes, index){
    this.tasks[index].votes = votes
    this.getHighestVote();
  }

  getHighestVote(){
    let highvote = Math.max.apply(Math, this.tasks.map(function(task) { return task.votes; }))
  
  }




}
