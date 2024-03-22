import React, {useEffect, useState} from 'react';
import {
  AppButton,
  AppHeader,
  AppProgressBar,
  AppText,
  MasterView,
} from '../../Component';
import {ScrollView, View, Image, ImageBackground} from 'react-native';
import styles from './styles';
import {FOODPICKUPDELIVERY} from '../../Util/ApiConst';
import {getRequest} from '../../Util/HttpUtility';
import FastImage from 'react-native-fast-image';
import {removeSpecialCharacter} from '../../Util/Const';

const FoodPickUpDelivery = ({navigation}: any) => {
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState<any>();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let url = `${FOODPICKUPDELIVERY}`;
      let infoResponse: any = await getRequest(url);
      setLoading(false);
      if (infoResponse) {
        setInfo(infoResponse);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const onPickupOrder = () => {
    navigation.push('TableReservation');
  };
  const onDeliveryOrder = () => {
    navigation.push('TableReservation');
  };

  return (
    <MasterView>
      <AppHeader title="Food Pick Up & Delivery" />
      <ImageBackground
        source={require('../../../assets/images/home_bg2.png')}
        resizeMode="cover"
        style={styles.imageMainContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {info?.length > 0 ? (
            <View style={styles.container}>
              <View style={styles.imageContainer}>
                <FastImage
                  source={{uri: info?.[0]?.image}}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.cardContainer}>
                <AppText style={styles.cardTitle}>{info?.[0].title}</AppText>
                <AppText style={styles.desc}>
                  {removeSpecialCharacter(info?.[0]?.content)}
                </AppText>
                <View style={styles.buttonContainer}>
                  <AppButton
                    label={info?.[0]?.button_link?.title}
                    containerStyle={styles.btnContainer}
                    labelStyle={styles.btnLbl}
                    onPress={onPickupOrder}
                  />
                </View>
              </View>
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: info?.[1]?.image}}
                  style={styles.image}
                  resizeMode="cover"
                />
              </View>
              <View style={styles.cardContainer}>
                <AppText style={styles.cardTitle}>{info?.[1]?.title}</AppText>
                <AppText style={styles.desc}>{info?.[1]?.content}</AppText>
                <View style={styles.buttonContainer}>
                  <AppButton
                    label={info?.[1]?.button_link?.title}
                    containerStyle={styles.btnContainer}
                    labelStyle={styles.btnLbl}
                    onPress={onDeliveryOrder}
                  />
                </View>
              </View>
            </View>
          ) : null}
        </ScrollView>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default FoodPickUpDelivery;
