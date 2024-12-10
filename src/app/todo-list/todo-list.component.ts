import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true, 
  imports: [CommonModule, FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: { id: number; task: string; completed: boolean }[] = [];
  newTask: string = '';

  addTodo() {
    if (this.newTask.trim()) {
      this.todos.push({
        id: Date.now(),
        task: this.newTask,
        completed: false
      });
      this.newTask = '';
    }
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleCompletion(id: number) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
    }
  }
}
