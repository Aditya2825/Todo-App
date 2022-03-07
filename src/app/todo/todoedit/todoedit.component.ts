import { Component, OnInit } from '@angular/core';
import { FormGroup,ReactiveFormsModule, FormControl,Validators,} from '@angular/forms';
import { Router, NavigationEnd,ActivatedRoute } from '@angular/router';
import { Todo } from '../../interfaces/todo.interface';
import { TodoService } from '../../services/todo.service';
import { ResponceData } from '../../interfaces/responce-data.interface';

@Component({
  selector: 'app-todoedit',
  templateUrl: './todoedit.component.html',
  styleUrls: ['./todoedit.component.css']
})
export class TodoeditComponent implements OnInit {

  todoData:Todo;
  editTodoFormGroup: FormGroup;
  server_response:ResponceData;
  timestamp = Date();
  timestamp_string = this.timestamp.toString()

  constructor(private todoService:TodoService,private router: Router,private activatedUrl: ActivatedRoute) { 
    this.activatedUrl.params.subscribe((param) =>
      this.getTodoDetailsByID(param._id)
    );
  }

  ngOnInit(): void {
  }

  getTodoDetailsByID(_id) {
    this.todoService.getById(_id).subscribe((Response) => {
      this.server_response = Response;
      this.editTodoForm();
      console.log('Received id using edit button through parameter: ',Response.data._id)
    });
  }

  editTodoForm() {
    this.editTodoFormGroup = new FormGroup({
      _id: new FormControl({ value: this.server_response.data._id, disabled: true },Validators.required),
      title: new FormControl(this.server_response.data.title, Validators.required),
      updatedAt:new FormControl({value:this.timestamp_string}),
    });
    console.log('Edit Todo Form accessed');
  }

  formData() {
    this.todoService.edit(this.editTodoFormGroup.value).subscribe();
    console.log('After clicking Edit Save button: ',this.editTodoFormGroup.value);
    this.router.navigate(['/todoList']);
  }
}
