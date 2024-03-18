import React, {FC} from 'react';
import styles from './styles';
import {TextInput, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../../Shared/theme';

interface AppSearchBoxProps {
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  onChangeText?: (text: string) => void;
}

export const AppSearchBox: FC<AppSearchBoxProps> = ({
  value,
  placeholder,
  onChangeText,
  readOnly,
}) => {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="keyboard-backspace"
        size={22}
        color={theme.color.primary}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={theme.color.primary}
        readOnly={readOnly}
      />
      <AntDesign name="search1" size={16} color={theme.color.primary} />
    </View>
  );
};
