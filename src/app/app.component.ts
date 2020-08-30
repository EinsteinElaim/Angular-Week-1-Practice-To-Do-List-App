import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo = 'Finish coding Week 1 Angular objectives.'

  todos: string[];
  
  constructor(){
    this.todos = ['Learn Angular', 'Learn Java', 'Learn Python']
  }
}
