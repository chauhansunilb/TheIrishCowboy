import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
  },
  subTitle: {
    paddingLeft: 4,
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.small,
  },
  container: {
    paddingHorizontal: theme.padding.sm,
    marginTop: 10,
    // paddingBottom: theme.padding.sm,
  },
  imageContainer: {
    height: 220,
    width: '100%',
    marginTop: 8,
    borderRadius: 15,
    overflow: 'hidden',
  },
  imageMenu: {
    height: 220,
    width: '100%',
    borderRadius: 15,
    padding: 0,
    margin: 0,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  cardContainer: {
    backgroundColor: theme.color.cardBG,
    borderColor: theme.color.cardBorder,
    borderWidth: 1,
    borderRadius: 15,
    padding: theme.padding.sm,
    marginVertical: 14,
    marginHorizontal: theme.padding.sm,
  },
  cardTitle: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
    fontSize: theme.fontSize.largeTitle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  price: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
    color: theme.color.primary2,
    marginTop: 10,
  },
  desc: {
    marginTop: 10,
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    lineHeight: 28,
  },
});

export default styles;
