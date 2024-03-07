import React, {ReactNode} from 'react';
import {StatusBar, StyleProp, View, ViewStyle} from 'react-native';
import masterViewStyle from './styles';
import { theme } from '../../Shared/theme';

interface AppMasterViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const MasterView: React.FC<AppMasterViewProps> = ({children, style}) => {
  return (
    <View style={[masterViewStyle.container, style]}>
      <StatusBar
        animated={true}
        backgroundColor={theme.color.bg}
        barStyle={'light-content'}
        showHideTransition={'fade'}
      />
      {children}
    </View>
  );
};
