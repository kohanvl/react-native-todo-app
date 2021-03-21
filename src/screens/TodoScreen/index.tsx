import React, {FC} from 'react';
import {Button, Text, View} from 'react-native';
import {AppCard} from '../../components/AppCard';
import {THEME} from '../../theme';
import {TodoScreenProps} from './interfaces';
import {styles} from './styles';

export const TodoScreen: FC<TodoScreenProps> = ({todo, onGoBack, onRemove}) => {
  const handlerRemoveTodo = () => {
    onRemove(todo.id);
  };
  return (
    <View>
      <AppCard>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Изменить" onPress={onGoBack} />
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <Button title="Назад" onPress={onGoBack} color={THEME.GREY_COLOR} />
        </View>
        <View style={styles.button}>
          <Button
            title="Удалить"
            onPress={handlerRemoveTodo}
            color={THEME.DANGER_COLOR}
          />
        </View>
      </View>
    </View>
  );
};
