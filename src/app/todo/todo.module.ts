import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoRoutingModule } from './todo-routing.module';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoeditComponent } from './todoedit/todoedit.component';


@NgModule({
  declarations: [TodoComponent, TodolistComponent, TodoeditComponent],
  imports: [CommonModule,TodoRoutingModule,FormsModule, ReactiveFormsModule]
})
export class TodoModule { }
