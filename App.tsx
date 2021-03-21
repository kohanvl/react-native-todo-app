import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {TodoItemProps} from './src/components/Todo/interfaces';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';
import {getTodoById} from './src/utils';

export default function App() {
  const [todoId, setTodoId] = useState<string | null>(null);
  const [todos, setTodos] = useState<TodoItemProps[] | []>([
    {id: '1', title: 'Написать прогу'},
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

  const handlerUpdateTodo = (id: string, title: string) => {
    setTodos((prev) =>
      prev.map((todo: TodoItemProps) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      }),
    );
  };

  if (todoId) {
    const currentTodo: TodoItemProps = getTodoById(todos, todoId);
    content = (
      <TodoScreen
        onGoBack={handlerGoBack}
        todo={currentTodo}
        onRemove={handlerRemoveTodo}
        onSave={handlerUpdateTodo}
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
