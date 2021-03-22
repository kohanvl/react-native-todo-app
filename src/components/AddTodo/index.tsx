import {AntDesign} from '@expo/vector-icons';
import React, {FC, useState} from 'react';
import {Alert, TextInput, View} from 'react-native';
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
      <AntDesign.Button name="pluscircleo" onPress={handlerPress}>
        Добавить
      </AntDesign.Button>
    </View>
  );
};
