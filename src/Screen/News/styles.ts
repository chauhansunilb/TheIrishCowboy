import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  flatListView: {
    paddingHorizontal: theme.padding.sm,
    flex: 1,
    paddingTop: 10,
  },
  flatListContainer: {
    paddingTop: 8,
  },
  itemContainer: {
    backgroundColor: theme.color.cardBG,
    paddingTop: 15,
    paddingHorizontal: theme.padding.xsm,
    paddingBottom: 30,
    marginBottom: 16,
    borderRadius: 15,
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: theme.color.cardBorder,
    borderWidth: 1,
  },
  newsImage: {
    height: 140,
    width: '80%',
  },
  title: {
    color: theme.color.primary2,
    fontFamily: theme.fontFamily.QFONT_BOLD,
    fontSize: theme.fontSize.normal,
    marginTop: 10,
  },
  dateContainer: {
    flex: 1,
    marginTop: 8,
    flexDirection: 'row',
    alignSelf: 'flex-start',
  },
  date: {
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.xsmall,
    marginLeft: 6,
  },
  desc: {
    marginLeft: 0,
    lineHeight: 20,
    marginTop: 10,
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
