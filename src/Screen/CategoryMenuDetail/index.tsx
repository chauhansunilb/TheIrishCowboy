import React, {useEffect, useState} from 'react';
import {
  AppHeader,
  AppMenu,
  AppProgressBar,
  AppSearchBox,
  AppText,
  MasterView,
} from '../../Component';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import {Image} from 'react-native';
import {getRequest} from '../../Util/HttpUtility';
import {MENUDETAIL} from '../../Util/ApiConst';
import {removeSpecialCharacter} from '../../Util/Const';
import VagitarianIcon from '../../../assets/images/vagitarian-icon.svg';
import FastImage from 'react-native-fast-image';

const CategoryMenuDetail = ({navigation, route}: any) => {
  const [search, setSearch] = useState('');
  const [menuDetail, setDetail] = useState({});
  const [isLoading, setLoading] = useState(false);
  const {item} = route.params;

  useEffect(() => {
    // fetchMenuDetail();
  }, []);

  const onSearchClick = () => {
    navigation.push('Search');
  };

  const fetchMenuDetail = async () => {
    try {
      let url = `${MENUDETAIL}${item?.item?.id || 50}`;
      let menuDetailResponse: any = await getRequest(url);
      setLoading(false);
      setDetail(menuDetailResponse);
      console.log(menuDetailResponse);
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  return (
    <MasterView style={{flex: 1}}>
      <ImageBackground
        source={require('../../../assets/images/home_bg2.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader
          isBack={true}
          render={
            <View style={styles.titleContainer}>
              <AppText style={styles.title}>
                Our Food Menu
                <AppText style={[styles.title, styles.subTitle]}>
                  {' '}
                  (11am to 8pm)
                </AppText>
              </AppText>
            </View>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <>
            <View style={styles.container}>
              <TouchableOpacity onPress={onSearchClick}>
                <AppSearchBox
                  placeholder="Search Your Menu"
                  value={search}
                  onChangeText={setSearch}
                  readOnly={true}
                />
              </TouchableOpacity>
              <View style={styles.imageContainer}>
                {item?.food_item_image_mobile ? (
                  <FastImage
                    source={{uri: item?.food_item_image_mobile}}
                    style={styles.imageMenu}
                    resizeMode="cover"
                  />
                ) : (
                  <FastImage
                    source={require('../../../assets/images/menu.png')}
                    style={styles.imageMenu}
                    resizeMode="cover"
                  />
                )}
              </View>
            </View>
            <AppMenu navigation={navigation} />
            <View style={styles.cardContainer}>
              <AppText style={styles.cardTitle}>
                {item?.food_item_title_mobile}
                {item?.food_menu_icon_mobile ? (
                  <VagitarianIcon height={22} width={36} />
                ) : null}
              </AppText>

              {item?.food_item_price_mobile ? (
                <AppText style={styles.price}>
                  ${(+item?.food_item_price_mobile)?.toFixed(2)}
                </AppText>
              ) : null}
              <AppText style={styles.desc}>
                {removeSpecialCharacter(item?.food_item_content_mobile || '')}
              </AppText>
            </View>
          </>
        </ScrollView>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default CategoryMenuDetail;
