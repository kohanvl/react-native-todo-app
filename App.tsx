import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {TodoItemProps} from './src/components/Todo/interfaces';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([]);
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
  let content = (
    <MainScreen
      todos={todos}
      onAddTodo={handlerAddTodo}
      onRemoveTodo={handlerRemoveTodo}
    />
  );

  if (todoId) {
    content = <TodoScreen />;
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
