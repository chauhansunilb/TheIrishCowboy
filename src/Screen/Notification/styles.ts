import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  imageMainContainer: {
    flex: 1,
  },
  container: {
    paddingHorizontal: theme.padding.sm,
  },
  flatListContainer: {
    paddingBottom: theme.padding.sm,
  },
  cardContainer: {
    backgroundColor: theme.color.cardBG,
    borderColor: theme.color.cardBorder,
    borderWidth: 1,
    borderRadius: 15,
    padding: theme.padding.xsm,
    marginTop: theme.padding.container,
  },
  title: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
    color: theme.color.primary2,
  },
  label: {
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.xsmall,
    lineHeight: 18,
    marginTop: 6,
  },
  date: {
    textAlign: 'right',
  },
});
export default styles;
