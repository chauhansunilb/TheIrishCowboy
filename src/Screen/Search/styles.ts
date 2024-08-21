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
    flex: 1,
  },
  searchContainer: {
    marginTop: 10,
    marginHorizontal: theme.padding.sm,
  },
  lbl: {
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.small,
    marginTop: theme.padding.sm,
    marginHorizontal: theme.padding.sm,
  },
  horizontailMargin: {
    marginHorizontal: theme.padding.sm,
  },
  lblSearch: {
    color: theme.color.primary2,
  },
  subCategoryContainer: {
    backgroundColor: theme.color.cardBG,
    borderColor: theme.color.cardBorder,
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 15,
    padding: 14,
    marginBottom: 16,
  },
  subItemTitleContaier: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  subCatTitle: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
    fontSize: theme.fontSize.small,
    flex: 1,
    marginBottom: 12,
  },
  label: {
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.xsmall,
    lineHeight: 18,
  },
  noteLbl: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
    color: theme.color.primary2,
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
  flex1: {
    flex: 1,
    marginTop: 10,
  },
});

export default styles;
