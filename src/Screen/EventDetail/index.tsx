import React, {useState} from 'react';
import {AppButton, AppHeader, AppText, MasterView} from '../../Component';
import {ImageBackground, ScrollView, View} from 'react-native';
import styles from './styles';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import {DDMMMYYYY} from '../../Util/Const';

const EventDetail = ({navigation, route}: any) => {
  const {item} = route.params;

  const onBookEvent = () => {
    navigation.push('TableReservation');
  };

  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg2.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader title="Events" isBack={true} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <FastImage
                source={{uri: item?.live_events_image}}
                style={styles.imageEvent}
                resizeMode="cover"
              />
            </View>
            <View style={styles.cardContainer}>
              <AppText style={styles.cardTitle}>
                {item?.live_events_title}
              </AppText>
              <AppText style={styles.date}>
                {' '}
                {moment(item?.live_events_date, 'DD/MM//YYYY').format(
                  DDMMMYYYY,
                )}
              </AppText>
              <AppText style={styles.desc}>
                {item?.live_events_details.replace(/<\/?[^>]+(>|$)/g, '')}
              </AppText>
              <View style={styles.buttonContainer}>
                <AppButton
                  label="Book a Table Now"
                  containerStyle={styles.btnContainer}
                  labelStyle={styles.btnLbl}
                  onPress={onBookEvent}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </MasterView>
  );
};

export default EventDetail;
