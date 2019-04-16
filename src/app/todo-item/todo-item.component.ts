import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() item: {name: string, completed: boolean};
  @Input() newItem: {name: string, completed: boolean};
  @Output() delete = new EventEmitter();
  @Output() checked = new EventEmitter();

  onDelete() {
    this.delete.emit();
  }

  onChecked() {
    this.checked.emit();
  }
}
