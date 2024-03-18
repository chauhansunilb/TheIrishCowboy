import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';

const styles = StyleSheet.create({
  imageMainContainer: {
    flex: 1,
  },
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
  cardContainer: {
    backgroundColor: theme.color.cardBG,
    borderColor: theme.color.cardBorder,
    marginVertical: theme.padding.sm,
    borderWidth: 1,
    borderRadius: 15,
    padding: theme.padding.sm,
  },
  cardTitle: {
    fontFamily: theme.fontFamily.CFONT_BOLD,
    fontSize: theme.fontSize.title,
  },
  desc: {
    marginTop: 12,
    fontFamily: theme.fontFamily.QFONT_REGULAR,
    fontSize: theme.fontSize.small,
    lineHeight: 22,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: theme.padding.container,
  },
  btnContainer: {
    height: 36,
    width: 135,
    borderRadius: 6,
  },
  btnLbl: {
    fontSize: theme.fontSize.small,
    fontFamily: theme.fontFamily.QFONT_BOLD,
  },
});

export default styles;
