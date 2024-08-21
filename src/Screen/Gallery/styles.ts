import {StyleSheet, Dimensions} from 'react-native';
import {theme} from '../../Shared/theme';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  galleryImage: {
    height: 230,
    width: '100%',
    borderRadius: 14,
    overflow: 'hidden',
  },
  flatListView: {
    flex: 1,
    marginTop: 16,
  },
  flatListContainer: {
    gap: 16,
    paddingHorizontal: theme.padding.sm,
    paddingBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000A6',
  },
  modalView: {
    // backgroundColor: 'white',
    borderRadius: 10,
    padding: 6,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    overflow: 'hidden',
  },
  previewImage: {
    height: height,
    width: width - 30,
  },
  close: {
    position: 'absolute',
    top: 80,
    right: 0,
  },
});

export default styles;
