import React, {ReactNode} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import masterViewStyle from './styles';

interface AppMasterViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}

export const MasterView: React.FC<AppMasterViewProps> = ({children, style}) => {
  return <View style={[masterViewStyle.container, style]}>{children}</View>;
};
