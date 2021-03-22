import React, {FC} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {THEME} from '../../theme';
import {AppButtonProps} from './interfaces';
import {styles} from './styles';

export const AppButton: FC<AppButtonProps> = ({
  children,
  onPress,
  color = THEME.MAIN_COLOR,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{backgroundColor: color, borderRadius: 5}}
    >
      <View style={styles.button}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};
