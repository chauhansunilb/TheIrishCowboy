import React, {FC, ReactNode} from 'react';
import {
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {AppText} from '..';
import styles from './styles';

interface AppButtonProps extends TouchableOpacityProps {
  children?: ReactNode;
  label: string;
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

export const AppButton: FC<AppButtonProps> = ({
  children,
  label,
  containerStyle,
  labelStyle,
  ...restProps
}) => {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} {...restProps}>
      {children}
      <AppText style={[styles.label, labelStyle]}>{label}</AppText>
    </TouchableOpacity>
  );
};
