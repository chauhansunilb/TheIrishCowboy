import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.color.primary2,
    flexDirection: 'row',
    borderRadius: 12,
  },
  label: {
    color: theme.color.white,
    fontFamily: theme.fontFamily.CFONT_BOLD,
    fontSize: theme.fontSize.button,
    flex: 1,
    textAlign: 'center',
    padding: 10,
  },
});

export default styles;
