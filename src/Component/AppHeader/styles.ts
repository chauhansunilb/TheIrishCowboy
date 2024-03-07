import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    paddingHorizontal: theme.padding.sm,
  },
  title: {
    paddingLeft: 14,
    fontFamily: theme.fontFamily.QFONT_REGULAR,
  },
});

export default styles;
