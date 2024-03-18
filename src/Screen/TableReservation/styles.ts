import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.padding.sm,
    paddingVertical: theme.padding.container,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    ...theme.shadow,
  },
  image: {
    height: 250,
    width: '100%',
    padding: 0,
    margin: 0,
  },
  formContainer: {
    paddingVertical: theme.padding.container,
    paddingHorizontal: theme.padding.xsm,
  },
  input: {
    marginTop: theme.padding.xsm,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: theme.padding.container,
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
  noteContainer: {
    flexDirection: 'row',
    marginTop: 25,
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
});

export default styles;
