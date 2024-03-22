import React, {useEffect, useState} from 'react';
import styles from './styles';
import {AppHeader, AppProgressBar, AppText, MasterView} from '../../Component';
import {ImageBackground, ScrollView, View, Image} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {theme} from '../../Shared/theme';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import {getRequest} from '../../Util/HttpUtility';
import {FLORENCE_ARIZATIONA, OUTLINE_IRELAND} from '../../Util/ApiConst';
import FastImage from 'react-native-fast-image';

const Information = ({navigation, route}: any) => {
  const [images, setImages] = useState<Array<string>>([]);
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState<{[key: string]: string}>({});
  const item = route.params;

  useEffect(() => {
    fetchInfo();
  }, [item]);

  const fetchInfo = async () => {
    try {
      setLoading(true);
      let url = item?.isOutliningIreland
        ? `${OUTLINE_IRELAND}`
        : `${FLORENCE_ARIZATIONA}`;
      let infoResponse: any = await getRequest(url);
      setLoading(false);
      if (infoResponse) {
        setInfo(infoResponse[0]);
        setImages(infoResponse[0].image_gallery);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  return (
    <MasterView>
      <AppHeader
        title={
          item?.isOutliningIreland ? 'Outlining Ireland' : 'Florence Arizona'
        }
        isBack={true}
      />
      <ImageBackground
        source={require('../../../assets/images/home_bg.png')}
        resizeMode="cover"
        style={styles.imageMainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <SliderBox
              images={images}
              sliderBoxHeight={250}
              dotColor={theme.color.primary2}
              inactiveDotColor={theme.color.white}
              paginationBoxVerticalPadding={20}
              resizeMode={'cover'}
              dotStyle={theme.dotStyle}
              ImageComponentStyle={styles.imageStyle}
              onCurrentImagePressed={(index: number) =>
                console.warn(`image ${index} pressed`)
              }
            />
            <View style={styles.cardContainer}>
              <AppText style={styles.title}>{info?.title}</AppText>
              <AppText style={styles.lbl}>{info?.details}</AppText>
              <AppText style={[styles.title, styles.title2]}>
                {info?.eat_drink_title}
              </AppText>
              <View style={styles.addressContainer}>
                <View style={styles.flex1}>
                  <AppText style={[styles.title, styles.title3]}>
                    {info?.place_title}
                  </AppText>
                  <View style={styles.locationContainer}>
                    <MaterialCommunityIcons
                      name="location-on"
                      size={13}
                      color={theme.color.primary2}
                    />
                    <AppText style={styles.address}>
                      {info?.place_address}
                    </AppText>
                  </View>
                  <AppText style={styles.lbl}>{info?.place_details}</AppText>
                </View>
                <View style={styles.flex1}>
                  <FastImage
                    source={{uri: info?.place_image}}
                    style={styles.infoImage}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default Information;
