import {AntDesign, FontAwesome} from '@expo/vector-icons';
import React, {FC, useState} from 'react';
import {Text, View} from 'react-native';
import {AppButton} from '../../components/AppButton';
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
        <AppButton onPress={handlerToggleModal}>
          <FontAwesome name="edit" size={20} />
        </AppButton>
      </AppCard>
      <View style={styles.buttons}>
        <View style={styles.button}>
          <AppButton onPress={onGoBack} color={THEME.GREY_COLOR}>
            <AntDesign name="back" size={20} color="#fff" />
          </AppButton>
        </View>
        <View style={styles.button}>
          <AppButton onPress={handlerRemoveTodo} color={THEME.DANGER_COLOR}>
            <FontAwesome name="remove" size={20} color="#fff" />
          </AppButton>
        </View>
      </View>
    </View>
  );
};
