import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.padding.container,
    marginHorizontal: theme.padding.sm,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    height: 250,
    width: '100%',
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  image: {
    height: 250,
    width: '100%',
    padding: 0,
    margin: 0,
  },
  contactContainer: {
    paddingHorizontal: theme.padding.xsm,
    marginTop: theme.padding.container,
    marginHorizontal: theme.padding.sm,
  },
  contactDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: theme.padding.sm,
  },
  title: {
    fontFamily: theme.fontFamily.CFONT_BOLD,
    fontSize: theme.fontSize.largeTitle,
  },
  iconBox: {
    height: 34,
    width: 34,
    backgroundColor: theme.color.cardBG,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lbl: {
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.small,
    paddingLeft: theme.padding.sm,
  },
  getInTouch: {
    marginTop: theme.padding.container,
  },
  input: {
    marginTop: theme.padding.xsm,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: theme.padding.container,
    marginBottom: 20,
  },
  btnContainer: {
    height: 36,
    width: 90,
    borderRadius: 6,
  },
  btnLbl: {
    fontSize: theme.fontSize.small,
    fontFamily: theme.fontFamily.QFONT_BOLD,
  },
});

export default styles;
