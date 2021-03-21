import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

export const AppCard: FC = (props) => {
  return <View style={styles.default}>{props.children}</View>;
};
