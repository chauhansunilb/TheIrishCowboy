import React, {ReactNode} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import textStyle from './style';

interface AppTextProps {
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  [key: string]: any;
}

export const AppText: React.FC<AppTextProps> = ({
  children,
  style = {},
  ...rest
}) => {
  return (
    <Text style={[textStyle.textStyle, style]} {...rest}>
      {children}
    </Text>
  );
};
