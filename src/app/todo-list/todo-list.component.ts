import { Component} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  title;
  todo: Array<{name: string, completed: boolean}> = [];
  todoFilter: Array<{name: string, completed: boolean}> = [];

  constructor() { }

  create() {
    if (this.title === '') {
      return;
    }
    this.todo.push({
       name: this.title,
       completed: false
     });
    this.title = '';
  }

  deleteItem(index: number) {
    this.todo.splice(index, 1);
  }
  toggle(index: number) {
    this.todo[index].completed = !this.todo[index].completed;
  }
  all() {
    this.todoFilter = this.todo;
    console.log(this.todoFilter);
  }

  filterCompleted() {
    const filtC = this.todo.filter(i => i.completed === true);
    this.todoFilter = filtC;
    console.log(this.todoFilter);
  }
  filterUncompleted() {
    const filtUn = this.todo.filter(i => i.completed === false);
    this.todoFilter = filtUn;
    console.log(this.todoFilter);
  }



}
