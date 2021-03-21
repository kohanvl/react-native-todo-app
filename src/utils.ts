import {TodoItemProps} from './components/Todo/interfaces';

export const getTodoById = (todos: TodoItemProps[], id: string) => {
  return todos.find((todo: TodoItemProps) => todo.id === id)!;
};
