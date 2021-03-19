import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {AddTodo} from './src/AddTodo';
import {Navbar} from './src/Navbar';
import {Todo} from './src/Todo';
import {TodoItemProps} from './src/Todo/interfaces';

export default function App() {
  const [todos, setTodos] = useState([]);
  const handlerAddTodo = (title: string) => {
    // TODO: interface any
    setTodos((prev: TodoItemProps[] | []): any => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };
  return (
    <View>
      <Navbar title="Todo App" />
      <View style={styles.container}>
        <AddTodo onAddTodo={handlerAddTodo} />
        <FlatList
          data={todos}
          keyExtractor={(item: TodoItemProps) => item.id}
          renderItem={({item}) => <Todo todo={item} />}
        />
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
