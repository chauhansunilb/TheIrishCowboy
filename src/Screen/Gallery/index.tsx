import React, {useEffect, useState} from 'react';
import {AppHeader, AppMenu, AppProgressBar, MasterView} from '../../Component';
import {
  FlatList,
  ImageBackground,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {getRequest} from '../../Util/HttpUtility';
import {GALLERY} from '../../Util/ApiConst';
import Close from '../../../assets/images/close.svg';

interface FormData {
  [key: string]: any;
}

const Gallery = ({navigation, route}: any) => {
  const [isLoading, setLoading] = useState(true);
  const [galleryInfo, setGalleryInfo] = useState<FormData[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState<FormData>({});

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      let url = `${GALLERY}`;
      let gallerReponse: any = await getRequest(url);
      if (gallerReponse) {
        setGalleryInfo(gallerReponse?.[0]?.mobile_gallery_image);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const onImagePress = (item: any) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const onCancel = () => {
    setSelectedItem({});
    setModalVisible(false);
  };

  const renderItem = ({item, index}: any) => {
    const isLeftColumn = index % 2 === 0;
    return (
      <TouchableOpacity
        onPress={() => onImagePress(item)}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          width: '50%',
          paddingLeft: isLeftColumn ? 0 : 8,
          paddingRight: isLeftColumn ? 8 : 0,
        }}>
        <FastImage
          style={styles.galleryImage}
          source={{uri: item.sizes?.medium}}
        />
      </TouchableOpacity>
    );
  };

  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader title="Our Gallery" />
        <AppMenu navigation={navigation} />
        <View style={styles.flatListView}>
          <FlatList
            data={galleryInfo || []}
            contentContainerStyle={styles.flatListContainer}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${item.id}`}
          />
        </View>
      </ImageBackground>

      <Modal
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={onCancel}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FastImage
              source={{uri: selectedItem?.url}}
              style={styles.previewImage}
              resizeMode="contain"
            />
          </View>
          <TouchableOpacity
            style={styles.close}
            onPress={onCancel}
            activeOpacity={0.8}>
            <Close height={30} />
          </TouchableOpacity>
        </View>
      </Modal>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default Gallery;
