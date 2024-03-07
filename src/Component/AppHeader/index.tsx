import React from 'react';
import {View} from 'react-native';
import {AppText} from '..';
import styles from './styles';
import Logo from '../../../assets/images/round_logo.svg';

export const AppHeader = () => {
  return (
    <View style={styles.container}>
      <Logo height={50} />
      <AppText style={styles.title}>Welcome To The Irish Cowboy</AppText>
    </View>
  );
};
