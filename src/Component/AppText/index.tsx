import React, {ReactNode} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import textStyle from './style';

interface AppTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
}

export const AppText: React.FC<AppTextProps> = ({children, style = {}}) => {
  return <Text style={[textStyle.textStyle, style]}>{children}</Text>;
};
