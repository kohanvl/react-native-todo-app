import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {NavbarProps} from './interfaces';
import {styles} from './styles';

export const Navbar: FC<NavbarProps> = ({title}) => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
