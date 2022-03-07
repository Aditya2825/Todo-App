import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoeditComponent } from './todoedit/todoedit.component';

const routes: Routes = [
  {path:'todoData', component: TodoComponent},
  {path:'todoList', component: TodolistComponent},
  {path:'todoEdit/:_id',component:TodoeditComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
