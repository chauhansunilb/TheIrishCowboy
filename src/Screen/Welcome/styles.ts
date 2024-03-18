import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../Shared/theme';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  gradientBg: {
    position: 'absolute',
    bottom: -70,
  },
  logo: {
    left: '27%',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: theme.padding.container,
  },
  welcome: {
    fontSize: theme.fontSize.title,
    fontFamily: theme.fontFamily.CFONT_BOLD,
    paddingBottom: 4,
  },
  welcomeSub: {
    fontSize: theme.fontSize.bigTitle,
    fontFamily: theme.fontFamily.CFONT_BOLD,
    textAlign: 'center',
    // paddingHorizontal: 16,
  },
  buttonContainer: {
    borderRadius: 22,
    marginVertical: 16,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: height,
  },
});

export default styles;
