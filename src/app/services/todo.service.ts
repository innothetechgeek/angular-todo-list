import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  todoUrl:string = 'https://jsonplaceholder.typicode.com/todos?_limit=7';

  constructor(private http:HttpClient ) { }

  getTodos():Observable <Todo[]>{
    
    return this.http.get<Todo[]>(this.todoUrl);

  }

}
