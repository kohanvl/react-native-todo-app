import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {TodoScreenProps} from './interfaces';

export const TodoScreen: FC<TodoScreenProps> = ({onGoBack, todo}) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <Button title="Назад" onPress={onGoBack} />
    </View>
  );
};
