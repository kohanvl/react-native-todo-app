import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {TodoItemProps} from './src/components/Todo/interfaces';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';
import {getTodoById} from './src/utils';

export default function App() {
  const [todoId, setTodoId] = useState<string | null>('1');
  const [todos, setTodos] = useState<TodoItemProps[] | []>([
    {id: '1', title: 'Написать прогу'},
    {id: '2', title: 'Выложить на гит'},
  ]);
  const handlerAddTodo = (title: string) => {
    // TO DO: interface any
    setTodos((prev: TodoItemProps[] | []): any => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };
  const handlerRemoveTodo = (id: string) => {
    const currentTodo: TodoItemProps = getTodoById(todos, id);
    Alert.alert(
      'Удаление элемента',
      `Вы уверены, что хотите удалить "${currentTodo.title}"?`,
      [
        {
          text: 'Отмена',
          style: 'cancel',
        },
        {
          text: 'Удалить',
          onPress: () => {
            setTodoId(null);
            setTodos(todos.filter((todo: TodoItemProps) => todo.id !== id));
          },
        },
      ],
    );
  };
  const handlerGoBack = () => {
    setTodoId(null);
  };
  let content = (
    <MainScreen
      todos={todos}
      onAddTodo={handlerAddTodo}
      onRemoveTodo={handlerRemoveTodo}
      onOpenTodo={setTodoId}
    />
  );

  if (todoId) {
    const currentTodo: TodoItemProps = getTodoById(todos, todoId);
    content = (
      <TodoScreen
        onGoBack={handlerGoBack}
        todo={currentTodo}
        onRemove={handlerRemoveTodo}
      />
    );
  }

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
