import React, {FC, useState} from 'react';
import {View, Button, TextInput, Alert} from 'react-native';
import {AddTodoProps} from './interfaces';
import {styles} from './styles';

export const AddTodo: FC<AddTodoProps> = ({onAddTodo}) => {
  const [text, setText] = useState('');
  const handlerPress = () => {
    if (text.trim()) {
      onAddTodo(text);
      setText('');
    } else {
      Alert.alert('Невозможно добавить пустое дело');
    }
  };
  return (
    <View style={styles.block}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Введите название дела"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" onPress={handlerPress} />
    </View>
  );
};
