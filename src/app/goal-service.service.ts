import { Injectable } from '@angular/core';
import { Tasks } from './goalList';

@Injectable({
  providedIn: 'root'
})
export class GoalServiceService {

  getTasks(){
    return Tasks
  }

  constructor() { }
}
