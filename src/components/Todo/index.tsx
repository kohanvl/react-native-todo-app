import React, {FC} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {TodoProps} from './interfaces';
import {styles} from './styles';

export const Todo: FC<TodoProps> = ({todo, onRemove}) => {
  const handlerRemoveTodo = () => {
    onRemove(todo.id);
  };
  return (
    <TouchableOpacity onLongPress={handlerRemoveTodo}>
      <View style={styles.todo}>
        <Text>{todo.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
