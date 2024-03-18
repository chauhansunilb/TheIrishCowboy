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
    paddingBottom: theme.padding.sm,
  },
  imageContainer: {
    height: 300,
    width: '100%',
    marginTop: 8,
    borderRadius: 15,
    alignItems: 'center',
    overflow: 'hidden',
  },
  imageEvent: {
    height: 300,
    width: 300,
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
    marginVertical: theme.padding.xsm,
  },
  cardTitle: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
    fontSize: theme.fontSize.largeTitle,
  },
  date: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
    color: theme.color.primary2,
    marginTop: 10,
  },
  desc: {
    marginTop: 8,
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    lineHeight: 24,
    fontSize: theme.fontSize.small,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: theme.padding.container,
  },
  btnContainer: {
    height: 36,
    width: 160,
    borderRadius: 6,
  },
  btnLbl: {
    fontSize: theme.fontSize.small,
    fontFamily: theme.fontFamily.QFONT_BOLD,
  },
});

export default styles;
