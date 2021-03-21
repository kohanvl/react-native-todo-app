import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {TodoItemProps} from './src/components/Todo/interfaces';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState<string | null>(null);
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
    setTodos(todos.filter((todo: TodoItemProps) => todo.id !== id));
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
    const currentTodo: TodoItemProps = todos.find(
      (todo: TodoItemProps) => todo.id === todoId,
    )!;
    content = <TodoScreen onGoBack={handlerGoBack} todo={currentTodo} />;
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
