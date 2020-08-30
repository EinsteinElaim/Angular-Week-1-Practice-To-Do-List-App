import { Component, OnInit, Output, EventEmitter } from '@angular/core';
//importing the goal class tha will be used as a blueprint for creating new goals on the form 
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  
  newTodo = new Todo(0,"","",new Date());


  @Output() addTodo = new EventEmitter<Todo>();


  submitTodo(){
    this.addTodo.emit(this.newTodo);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
