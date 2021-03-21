import React, {FC, useState} from 'react';
import {Button, Text, View} from 'react-native';
import {AppCard} from '../../components/AppCard';
import {ModalEdit} from '../../components/ModalEdit';
import {THEME} from '../../theme';
import {TodoScreenProps} from './interfaces';
import {styles} from './styles';

export const TodoScreen: FC<TodoScreenProps> = ({
  todo,
  onGoBack,
  onRemove,
  onSave,
}) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handlerRemoveTodo = () => {
    onRemove(todo.id);
  };
  const handlerToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handlerSaveTodo = (title: string) => {
    onSave(todo.id, title);
    setIsModalOpen(false);
  };
  return (
    <View>
      <ModalEdit
        isVisible={isModalOpen}
        onClose={handlerToggleModal}
        initialTitle={todo.title}
        onSave={handlerSaveTodo}
      />
      <AppCard>
        <Text style={styles.title}>{todo.title}</Text>
        <Button title="Изменить" onPress={handlerToggleModal} />
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
