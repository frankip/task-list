import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { MerchComponent } from './components/merch/merch.component';
import { TaskListComponent } from './components/task-list/task-list.component';


const routes: Routes = [

  { path: 'login', component: AuthComponent},
  { path: '', component: TaskListComponent},
  { path: 'merch', component: MerchComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
