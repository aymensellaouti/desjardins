import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';
import { LoggerService } from 'src/app/services/logger.service';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];
  constructor(private loggerService: LoggerService) {}

  // Todo: Logger la liste des todos
  loggerTodos(): void {
    this.loggerService.logger(this.todos);
  }
  // Todo: récupérer la liste des Todos
  getTodos(): Todo[] {
    return this.todos;
  }
  // Todo: Ajouter un Todo
  addTodo(todo: Todo): void {
    this.todos.push(todo);
  }
  // Todo: Supprimer un Todo
  deleteTodo(todo: Todo): void {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
  }
}
