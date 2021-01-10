import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos:Todo[];
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        id: 1,
        title: 'Study Angular.js',
        completed: true,
      },
      {
        id:2,
        title: 'Upload a tutorial on youtube',
        completed: true,
      },
      {
        id:3,
        title: 'Record second video tutorial',
        completed: true
      },
      {
        id: 4,
        title: 'Study ionic',
        completed: false
      },{
        id: 4,
        title: 'Build ionic app',
        completed: false
      }
    ];
  }

}
