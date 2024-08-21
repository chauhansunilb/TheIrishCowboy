import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  heroSliderContainer: {
    // flex: 1,
    marginTop: -12,
  },
  heroImage: {
    height: 380,
    width: width,
    borderRadius: 10,
    // overflow: 'hidden',
    ...theme.shadow,
  },
  sliderItemContainer: {
    flex: 1,
    marginLeft: -34,
    borderRadius: 10,
    // borderWidth: 1,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -8,
  },
  ourMenuContainer: {
    marginTop: theme.padding.sm,
  },
  title: {
    fontFamily: theme.fontFamily.CFONT_BOLD,
    fontSize: theme.fontSize.title,
    paddingHorizontal: theme.padding.sm,
  },
  ourContainerFlatList: {
    marginTop: theme.padding.sm,
    paddingLeft: theme.padding.sm,
  },
  ourMenuItemContainer: {
    marginEnd: theme.padding.xsm,
  },
  ourMenuBtnContainer: {
    borderRadius: 6,
    overflow: 'hidden',
  },
  ourMenuBtnLabel: {
    paddingVertical: 7,
    paddingHorizontal: 12,
    fontSize: theme.fontSize.small,
    fontFamily: theme.fontFamily.QFONT_BOLD,
  },
  eventContainer: {
    marginTop: theme.padding.sm,
  },
  eventImageStyle: {
    borderRadius: 15,
    width: '100%',
    height: 250,
    marginTop: 8,
    overflow: 'hidden',
  },
  mb: {
    marginBottom: 12,
  },
  paddingHorizontal: {
    paddingHorizontal: theme.padding.sm,
    ...theme.shadow,
  },
});

export default styles;
