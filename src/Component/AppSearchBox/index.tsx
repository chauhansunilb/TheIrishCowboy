import React, {FC} from 'react';
import styles from './styles';
import {TextInput, TouchableOpacity, View} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {theme} from '../../Shared/theme';
import {AppText} from '..';

interface AppSearchBoxProps {
  value?: string;
  placeholder?: string;
  readOnly?: boolean;
  onChangeText?: (text: string) => void;
  onSearch?: () => void;
  onBack?: () => void;
  [key: string]: any;
}

export const AppSearchBox: FC<AppSearchBoxProps> = ({
  value,
  placeholder,
  onChangeText,
  readOnly,
  onSearch,
  onBack,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={theme.activeOpacity} onPress={onBack}>
        <MaterialCommunityIcons
          name="keyboard-backspace"
          size={22}
          color={theme.color.primary}
        />
      </TouchableOpacity>
      {readOnly ? (
        <AppText style={styles.readonlyInput}>{placeholder}</AppText>
      ) : (
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={theme.color.primary}
          readOnly={readOnly}
          {...rest}
        />
      )}
      <TouchableOpacity activeOpacity={theme.activeOpacity} onPress={onSearch}>
        <AntDesign name="search1" size={16} color={theme.color.primary} />
      </TouchableOpacity>
    </View>
  );
};
