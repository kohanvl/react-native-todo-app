import React, {useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {Navbar} from './src/components/Navbar';
import {TodoItemProps} from './src/components/Todo/interfaces';
import {MainScreen} from './src/screens/MainScreen';
import {TodoScreen} from './src/screens/TodoScreen';
import {getTodoById} from './src/utils';

export default function App() {
  const [todoId, setTodoId] = useState<string | null>(null);
  const [todos, setTodos] = useState<TodoItemProps[] | []>([]);
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
          style: 'destructive',
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

  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        {todoId ? (
          <TodoScreen
            onGoBack={handlerGoBack}
            todo={getTodoById(todos, todoId)}
            onRemove={handlerRemoveTodo}
            onSave={handlerUpdateTodo}
          />
        ) : (
          <MainScreen
            todos={todos}
            onAddTodo={handlerAddTodo}
            onRemoveTodo={handlerRemoveTodo}
            onOpenTodo={setTodoId}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
