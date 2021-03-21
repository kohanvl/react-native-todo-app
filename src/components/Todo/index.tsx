import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {TodoProps} from './interfaces';
import {styles} from './styles';

export const Todo: FC<TodoProps> = ({todo, onRemove, onOpen}) => {
  const handlerRemoveTodo = () => {
    onRemove(todo.id);
  };
  const handlerOpenTodo = () => {
    onOpen(todo.id);
  };
  return (
    <TouchableOpacity onLongPress={handlerRemoveTodo} onPress={handlerOpenTodo}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
