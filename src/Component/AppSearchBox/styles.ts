import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  container: {
    borderColor: theme.color.border,
    borderWidth: 1,
    borderRadius: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: theme.padding.sm,
    height: 40,
  },
  input: {
    color: theme.color.white,
    flex: 1,
    marginLeft: 12,
    height: 40,
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.small,
  },
});

export default styles;
