import React, {FC, useState} from 'react';
import {Alert, Modal, TextInput, View} from 'react-native';
import {THEME} from '../../theme';
import {AppButton} from '../AppButton';
import {ModalEditProps} from './interfaces';
import {styles} from './styles';

export const ModalEdit: FC<ModalEditProps> = ({
  isVisible,
  initialTitle,
  onClose,
  onSave,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const handlerSaveTodo = () => {
    const titleLen = title.trim().length;
    if (titleLen < 3) {
      Alert.alert('Ошибка', `Минимальная длина 3 символа. Сейчас ${titleLen}`);
    } else {
      onSave(title);
    }
  };
  return (
    <Modal visible={isVisible} animationType="slide">
      <View style={styles.wrap}>
        <TextInput
          style={styles.input}
          placeholder="Введите название"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={64}
          value={title}
          onChangeText={setTitle}
        />
        <View style={styles.buttons}>
          <AppButton onPress={onClose} color={THEME.GREY_COLOR}>
            Отменить
          </AppButton>
          <AppButton onPress={handlerSaveTodo}>Сохранить</AppButton>
        </View>
      </View>
    </Modal>
  );
};
