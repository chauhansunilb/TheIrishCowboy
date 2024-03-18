import React, {FC} from 'react';
import styles from './styles';
import {TextInput, TextStyle, ViewStyle} from 'react-native';
import {theme} from '../../Shared/theme';
import {AppText} from '..';

interface AppInputProps {
  value?: string;
  placeholder?: string;
  style?: ViewStyle | TextStyle;
  multiline?: boolean;
  onChangeText?: (text: string) => void;
  error?: string;
  [key: string]: unknown;
}

export const AppInput: FC<AppInputProps> = ({
  value,
  placeholder,
  style,
  error,
  onChangeText,
  ...rest
}) => {
  return (
    <>
      <TextInput
        style={[styles.input, {height: rest?.multiline ? 100 : 44}, style]}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={theme.color.primary}
        {...rest}
      />
      {error ? <AppText style={styles.error}>{error}</AppText> : null}
    </>
  );
};
