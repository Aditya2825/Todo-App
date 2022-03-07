import { Component, OnInit } from '@angular/core';
import {FormGroup,ReactiveFormsModule, FormControl,Validators,} from '@angular/forms';
import {Router, NavigationEnd,ActivatedRoute} from '@angular/router';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';
import { ResponceData } from '../../interfaces/responce-data.interface';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent  {
  
  name='calc';
  todoData:Todo[]=[];
  newTodoForm: FormGroup;
  response_data:ResponceData;
  timestamp = Date();
  timestamp_string = this.timestamp.toString()

  constructor(private todoService:TodoService,private router: Router, private activatedRoute: ActivatedRoute) {
    this.addNewTodoReactiveForm();
   }

  ngOnInit(): void {
    // Getting Todo Data from Web API
    this.todoService.getAll().subscribe((todoData)=>{
      (this.response_data=todoData);
      console.log(this.response_data.data);
    });
  }

  // Todo Reactive form to add/send data to web API
  addNewTodoReactiveForm() {
    this.newTodoForm = new FormGroup({
      title: new FormControl('', Validators.required),
      createdAt:new FormControl({value:this.timestamp_string}),
      updatedAt:new FormControl({value:this.timestamp_string}),
    });
    console.log(this.newTodoForm.value)
  }

  // Sending todo data to web API after form submit
    addNew() {
      this.todoService.add({
        title: this.newTodoForm.value.title,
        isCompleted: true,
        createdAt: this.newTodoForm.value.createdAt,
        updatedAt: this.newTodoForm.value.updatedAt,
      }).subscribe((todoData) => {
        (this.todoData = todoData),
        window.location.reload()
      });
      // this.router.navigate(['/todoList'])
  }


  // Deleting Todo Data From web API
  deleteTodo(i){
    this.todoService.delete(i).subscribe((delete_response: any) => {
        (this.todoData = this.todoData.filter((response_data) => (response_data._id !== i))),
        window.location.reload()
          // this.router.navigate([this.router.url])
      });
    console.log('User Delete');
    console.log(typeof i,i);
  }
}




