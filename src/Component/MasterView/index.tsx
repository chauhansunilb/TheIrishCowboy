import React, {ReactNode} from 'react';
import {StatusBar, StyleProp, View, ViewStyle} from 'react-native';
import masterViewStyle from './styles';
import {theme} from '../../Shared/theme';
import {SafeAreaView} from 'react-native-safe-area-context';

interface AppMasterViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const MasterView: React.FC<AppMasterViewProps> = ({children, style}) => {
  return (
    <SafeAreaView
      style={[masterViewStyle.container, style]}
      mode="padding"
      edges={['top']}>
      <StatusBar
        animated={true}
        backgroundColor={theme.color.bg}
        barStyle={'light-content'}
        showHideTransition={'fade'}
      />
      {children}
    </SafeAreaView>
  );
};
