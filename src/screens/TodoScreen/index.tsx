import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {THEME} from '../../theme';
import {TodoScreenProps} from './interfaces';
import {styles} from './styles';

export const TodoScreen: FC<TodoScreenProps> = ({onGoBack, todo}) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" onPress={onGoBack} color={THEME.GREY_COLOR} />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            onPress={onGoBack}
            color={THEME.DANGER_COLOR}
          />
        </View>
      </View>
    </View>
  );
};
