import {Platform, StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 10 : 0,
    paddingHorizontal: theme.padding.sm,
    // paddingBottom: 6,
  },
  backStyle: {
    paddingVertical: 12,
    paddingEnd: 6,
  },
  titlContainer: {
    flex: 1,
    paddingLeft: 14,
  },
  title: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
  },
  navigator: {
    paddingVertical: 10,
    paddingLeft: 4,
    marginRight: 3,
  },
  notificationContainer: {
    paddingVertical: 10,
    paddingLeft: 6,
  },
  notificationBadge: {
    backgroundColor: '#EA5A0A',
    position: 'absolute',
    right: 3,
    top: 3,
    height: 6,
    width: 6,
    borderColor: theme.color.white,
    borderWidth: 1,
    borderRadius: 6,
  },
  actionSheetContainer: {
    paddingHorizontal: theme.padding.container,
    paddingVertical: 6,
    marginBottom: theme.padding.xsm,
  },
  menu: {
    fontFamily: theme.fontFamily.QFONT_BOLD,
    marginTop: theme.padding.container,
    color: theme.color.bg,
  },
});

export default styles;
