import React, {FC} from 'react';
import {Text, View, Button, TextInput} from 'react-native';
import {styles} from './styles';

export const AddTodo: FC = () => {
  return (
    <View style={styles.block}>
      <TextInput style={styles.input} />
      <Button title="Добавить" onPress={() => {}} />
    </View>
  );
};
