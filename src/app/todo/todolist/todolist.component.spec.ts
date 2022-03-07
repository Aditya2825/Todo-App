import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule,FormControl,FormGroup } from '@angular/forms';
import { TodolistComponent } from './todolist.component';
import { TodoService } from '../../services/todo.service';


describe('TodolistComponent', () => {
  let component: TodolistComponent;
  let fixture: ComponentFixture<TodolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodolistComponent ],
      imports: [HttpClientTestingModule,FormsModule,ReactiveFormsModule,RouterTestingModule],
      providers: [TodoService],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have name = calc', () => {
    expect(component.name).toEqual('calc');
  })

  it('should create Todolist FormGroup', () => {
    expect(component.newTodoForm).toBeTruthy();
  });

});
