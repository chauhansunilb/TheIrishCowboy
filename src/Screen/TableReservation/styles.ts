import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  container: {
    paddingVertical: theme.padding.container,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginHorizontal: theme.padding.sm,
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
    marginHorizontal: theme.padding.sm,
  },
  input: {
    marginTop: theme.padding.xsm,
  },
  viewInput: {
    borderColor: theme.color.border,
    borderBottomWidth: 2,
    height: 44,
    justifyContent: 'center',
    paddingHorizontal: theme.padding.xsm,
  },
  inputText: {
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.small,
    color: theme.color.primary,
  },
  error: {
    fontSize: theme.fontSize.small,
    color: theme.color.primary2,
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
