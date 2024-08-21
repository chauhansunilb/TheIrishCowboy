import {StyleSheet} from 'react-native';
import {theme} from '../../Shared/theme';
import {rgbaColor} from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    top: 0,
    left: '27%',
    position: 'absolute',
  },
  mainContainer: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: '50%',
  },
  title: {
    color: theme.color.white,
    fontFamily: theme.fontFamily.CFONT_BOLD,
    fontSize: theme.fontSize.largeTitle,
    textAlign: 'center',
  },
  cardBox: {
    width: '92%',
    alignSelf: 'center',
    backgroundColor: 'rgba(65, 65, 65, 0.45)',
    borderRadius: 15,
    paddingHorizontal: 16,
    paddingVertical: 40,
  },
  input: {
    marginTop: 20,
  },
  btnSignUps: {
    marginTop: 31,
    width: 130,
    alignSelf: 'center',
    borderRadius: 20,
  },
  btnLableStyle: {
    padding: 6,
    fontFamily: theme.fontFamily.QFONT_BOLD,
    fontSize: 15,
  },
});

export default styles;
