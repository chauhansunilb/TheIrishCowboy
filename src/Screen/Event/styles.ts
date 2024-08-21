import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  container: {
    paddingTop: 6,
    flex: 1,
  },
  lable: {
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.xsmall,
    lineHeight: 18,
    paddingHorizontal: theme.padding.sm,
  },
  subCategoryContainer: {
    backgroundColor: theme.color.cardBG,
    borderColor: theme.color.cardBorder,
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginTop: 16,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
    height: 105,
    width: 105,
    borderRadius: 20,
  },
  flex1: {
    flex: 1,
  },
  eventFlatlist: {
    paddingBottom: 20,
    paddingHorizontal: theme.padding.sm,
  },
  m10: {
    marginTop: 8,
  },
  textContainer: {
    marginLeft: 12,
  },
  title: {
    fontSize: theme.fontSize.small,
    fontFamily: theme.fontFamily.QFONT_BOLD,
  },
  desc: {
    fontSize: theme.fontSize.xsmall,
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    marginTop: 6,
  },

  bottomButtonContainer: {
    position: 'absolute',
    backgroundColor: theme.color.primary2,
    right: 0,
    bottom: 0,
    width: 34,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 15,
  },
});

export default styles;
