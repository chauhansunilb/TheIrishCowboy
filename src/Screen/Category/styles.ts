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
  },
  noteContainer: {
    flexDirection: 'row',
    marginTop: 10,
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
  imageContainer: {
    height: 220,
    width: '100%',
    marginTop: 8,
    borderRadius: 10,
  },
  imageMenu: {
    height: 220,
    width: '100%',
    borderRadius: 10,
    padding: 0,
    margin: 0,
    marginTop: 4,
    resizeMode: 'cover',
    ...theme.shadow,
  },
  menuList: {
    marginTop: 12,
  },
  menuFlatListContainer: {
    paddingBottom: theme.padding.sm,
  },
  categoryTitle: {
    fontFamily: theme.fontFamily.CFONT_BOLD,
    fontSize: theme.fontSize.largeTitle,
  },
  subCategoryContainer: {
    backgroundColor: theme.color.cardBG,
    borderColor: theme.color.cardBorder,
    overflow: 'hidden',
    borderWidth: 1,
    borderRadius: 15,
    padding: 14,
    marginTop: 16,
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
  subItemDes: {
    // marginTop: 8,
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
