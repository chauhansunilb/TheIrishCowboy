import React, {useEffect, useState} from 'react';
import {
  AppHeader,
  AppProgressBar,
  AppSearchBox,
  AppText,
  MasterView,
} from '../../Component';
import {ImageBackground, ScrollView, View} from 'react-native';
import styles from './styles';
import {Image} from 'react-native';
import {getRequest} from '../../Util/HttpUtility';
import {MENUDETAIL} from '../../Util/ApiConst';

const CategoryMenuDetail = ({route}: any) => {
  const [search, setSearch] = useState('');
  const [menuDetail, setDetail] = useState({});
  const [isLoading, setLoading] = useState(true);
  const {item} = route.params;

  useEffect(() => {
    fetchMenuDetail();
  }, []);

  const fetchMenuDetail = async () => {
    try {
      let url = `${MENUDETAIL}${item?.item?.id || 50}`;
      let menuDetailResponse: any = await getRequest(url);
      setLoading(false);
      setDetail(menuDetailResponse);
      console.log(MENUDETAIL)
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
              <AppText style={styles.title}>Our Food Menu</AppText>
              <AppText style={[styles.title, styles.subTitle]}>
                (11am to 8pm)
              </AppText>
            </View>
          }
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <AppSearchBox
              placeholder="Search Your Menu"
              value={search}
              onChangeText={setSearch}
            />
            <View style={styles.imageContainer}>
              <Image
                source={require('../../../assets/images/menu.png')}
                style={styles.imageMenu}
                resizeMode="cover"
              />
            </View>
            <View style={styles.cardContainer}>
              <AppText style={styles.cardTitle}>
                {item?.food_item_title}
              </AppText>
              <AppText style={styles.price}>
                ${Math.floor(item?.food_item_price)?.toFixed(2)}
              </AppText>
              <AppText style={styles.desc}>{item?.food_item_content}</AppText>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default CategoryMenuDetail;
