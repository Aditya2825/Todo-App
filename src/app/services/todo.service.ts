import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo.interface';
import { ResponceData } from '../interfaces/responce-data.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private readonly BASE_URL='https://express-todoapi-opensource.herokuapp.com/todos';

  constructor(private http: HttpClient) {}

  // Adding new data after receiving existing data from webAPI
  add(data: Todo): Observable<Todo[]> {
    return this.http.post<Todo[]>(this.BASE_URL, data);
  }

  // Getting data from webAPI using ID specific or ID variable
  getById(_id: any): Observable<ResponceData> {
    return this.http.get<ResponceData>(`${this.BASE_URL}/${_id}`);
    // return this.http.get<Todo[]>(`${this.BASE_URL}/${id}`);
  }

  // update() {} Getting data and editting the existing data
  edit(data: Todo): Observable<ResponceData> {
    console.log('Edit Service',data);
    return this.http.put<ResponceData>(`${this.BASE_URL}/${data._id}`, data, {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }
  
  // Deleting data after receiving data from webAPI
  // delete() {}
  delete(_id: number): Observable<{}> {
    return this.http.delete(`${this.BASE_URL}/${_id}`);
  }

  // getAll() {} Getting all the data from the webAPI
  getAll(): Observable<ResponceData> {
    return this.http.get<ResponceData>(`${this.BASE_URL}`);
  }

}
