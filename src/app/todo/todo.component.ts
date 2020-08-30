import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todoss: Todo[] = [
    new Todo(1, 'Learn Angular', 'I need to learn Angular.', new Date(2020,8,30)),
    new Todo(2, 'Learn coding Java', 'Ihave to learn coding Java.', new Date(2020,9,30)),
    new Todo(3, 'Learn coding in Python', 'I need to learn coding in Python.', new Date(2020,10,2)),
  ];


  toggleDetails(index){
    this.todoss[index].showDescription = !this.todoss[index].showDescription
  }


  addNewTodo(todo){
    let todoLength = this.todoss.length;
    todo.id = todoLength + 1;
    todo.completeDate = new Date(todo.completeDate)
    this.todoss.push(todo)
  }


  deleteTodo(isComplete, index){
    if(isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.todoss[index].name}?`)

      if(toDelete){
        this.todoss.splice(index, 1);
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
