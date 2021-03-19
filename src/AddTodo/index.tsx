import React, {FC} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {AddTodoProps} from './interfaces';
import {styles} from './styles';

export const AddTodo: FC<AddTodoProps> = ({onAddTodo}) => {
  const handlerPress = () => {
    onAddTodo('Todo');
  };
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Добавить" onPress={handlerPress} />
    </View>
  );
};
