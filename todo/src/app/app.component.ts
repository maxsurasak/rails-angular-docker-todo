import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo';
  toDos = [];
  incompleteToDos;
  todo = new FormControl();
  constructor(private todoService: TodoService) {
    this.getTodoList();
  }
  getTodoList() {
    this.todoService.getList().subscribe((res) => {
      this.toDos = res;
    });
  }
  addToDo() {
    this.todoService.create({ title: this.todo.value }).subscribe((res) => {
      this.todo.setValue('');
      this.getTodoList();
    });
  }
  updateTodo(id, done) {
    this.todoService.update(id, { done }).subscribe((res) => {
      this.todo.setValue('');
      this.getTodoList();
    });
  }
}
