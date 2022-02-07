import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AddTodoComponent } from '../add-todo/add-todo.component';
 
import { Todo } from './Todo';
 
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  localItem : string;
   
  todos:Todo[];
   
  constructor() { 
    this.localItem = (localStorage.getItem('todos')||'{}');
    if(this.localItem==null)
    {
      
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }
deleteTodo(todo:Todo){
    console.log(todo);
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todos));
}
AddTodo(todo:Todo){
  console.log(todo);
  
   this.todos.push(todo);
   localStorage.setItem("todos",JSON.stringify(this.todos));

}}
