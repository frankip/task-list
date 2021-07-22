import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  @Output() totalVotesEmitter = new EventEmitter<number>();
  constructor() { }
  totalVote: number = 0;

  ngOnInit(): void {
  }
  upVote(){
    this.totalVote +=1
    this.totalVotesEmitter.emit(this.totalVote)
  }
  downVote(){
    this.totalVote -=1
    this.totalVotesEmitter.emit(this.totalVote)
  }

}
