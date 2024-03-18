import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  imageMainContainer: {
    flex: 1,
  },
  container: {
    // paddingHorizontal: theme.padding.sm,
    // marginTop: theme.padding.container,
    marginTop: 4,
    flex: 1,
  },
  imageStyle: {
    borderRadius: 15,
    width: '90%',
    marginTop: 8,
    overflow: 'hidden',
  },
  cardContainer: {
    backgroundColor: theme.color.cardBG,
    borderColor: theme.color.cardBorder,
    borderWidth: 1,
    borderRadius: 15,
    padding: theme.padding.sm,
    marginHorizontal: theme.padding.sm,
    marginBottom: theme.padding.container,
  },
  title: {
    fontFamily: theme.fontFamily.CFONT_BOLD,
    fontSize: theme.fontSize.title,
  },
  lbl: {
    fontSize: theme.fontSize.small,
    lineHeight: 20,
    marginTop: 8,
  },
  title2: {
    marginTop: theme.padding.xsm,
  },
  addressContainer: {
    flexDirection: 'row',
    marginTop: theme.padding.xsm,
    alignItems: 'center',
  },
  title3: {
    color: theme.color.primary2,
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 8,
    // alignItems: 'center',
  },
  address: {
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.xsmall,
    paddingLeft: 6,
  },
  flex1: {
    flex: 1,
  },
  infoImage: {
    height: 265,
    width: '100%',
    borderRadius: 6,
  },
});
export default styles;
