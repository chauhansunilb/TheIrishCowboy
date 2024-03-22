import React, {FC} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {theme} from '../../Shared/theme';
import { MasterView } from '..';

interface AppProgressBarProps {
  isShow: boolean;
}

export const AppProgressBar: FC<AppProgressBarProps> = ({isShow}) => {
  return isShow ? (
    <MasterView style={styles.container}>
      <ActivityIndicator size="large" color={theme.color.primary2} />
    </MasterView>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '110%',
    width: '100%',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: '#00000099',
  },
});
