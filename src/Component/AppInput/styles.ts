import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  input: {
    borderColor: theme.color.border,
    borderBottomWidth: 2,
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.small,
    color: theme.color.primary,
    paddingHorizontal: theme.padding.xsm,
  },
  error: {
    fontSize: theme.fontSize.small,
    color: theme.color.primary2,
  }
});

export default styles;
