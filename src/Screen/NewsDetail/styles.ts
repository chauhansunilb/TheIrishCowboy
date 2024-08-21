import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  scrollView: {
    marginTop: 22,
  },
  container: {
    paddingHorizontal: theme.padding.sm,
  },
  newsImage: {
    height: 234,
    width: '100%',
    // resizeMode: 'cover',
  },
  cardContainer: {
    backgroundColor: theme.color.cardBG,
    borderColor: theme.color.cardBorder,
    borderWidth: 1,
    borderRadius: 15,
    padding: theme.padding.sm,
    marginVertical: 20,
    marginHorizontal: theme.padding.sm,
  },
  title: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
    fontSize: theme.fontSize.largeTitle,
  },
  dateContainer: {
    flex: 1,
    marginTop: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
    fontSize: theme.fontSize.button,
    marginLeft: 6,
    color: 'red',
  },
  newDesc: {
    marginTop: 10,
    lineHeight: 32,
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.normal,
  },
});

export default styles;
