import {TodoItemProps} from '../../components/Todo/interfaces';

export interface TodoScreenProps {
  onGoBack: () => void;
  todo: TodoItemProps;
}
