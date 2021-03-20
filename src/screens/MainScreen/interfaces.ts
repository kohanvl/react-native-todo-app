import {TodoItemProps} from '../../components/Todo/interfaces';

export interface MainScreenProps {
  todos: TodoItemProps[];
  onAddTodo: (title: string) => void;
  onRemoveTodo: (id: string) => void;
}
