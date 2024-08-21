import React, {useState} from 'react';
import {
  AppButton,
  AppHeader,
  AppMenu,
  AppText,
  MasterView,
} from '../../Component';
import {ImageBackground, ScrollView, View} from 'react-native';
import styles from './styles';
import {Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import {DDMMMYYYY} from '../../Util/Const';

const EventDetail = ({navigation, route}: any) => {
  const {item, isDetail, isSportEvent, isWeeklyEvent, isCateringEvent} =
    route.params;

  const onBookEvent = () => {
    navigation.push('TableReservation');
  };

  const getImage = () => {
    if (isWeeklyEvent) {
      return item?.weekly_events_image;
    } else if (isSportEvent) {
      return item?.sports_events_image;
    } else if (isCateringEvent) {
      return item?.catering_services_image;
    } else {
      return item?.live_events_image;
    }
  };

  const getTitle = () => {
    if (isWeeklyEvent) {
      return item?.weekly_events_title;
    } else if (isSportEvent) {
      return item?.sports_events_title;
    } else if (isCateringEvent) {
      return item?.catering_services_title;
    } else {
      return item?.live_events_title;
    }
  };

  const getDate = () => {
    if (isWeeklyEvent) {
      return item?.weekly_events_date;
    } else if (isSportEvent) {
      return item?.sports_events_date;
    } else if (isCateringEvent) {
      return item?.catering_services_date;
    } else {
      return item?.live_events_date;
    }
  };

  const getDescription = () => {
    if (isWeeklyEvent) {
      return item?.weekly_events_details;
    } else if (isSportEvent) {
      return item?.sports_events_details;
    } else if (isCateringEvent) {
      return item?.catering_services_details;
    } else {
      return item?.live_events_details;
    }
  };

  const getButton = () => {
    if (isCateringEvent) {
      return item?.catering_services_link?.title;
    } else {
      return 'Book a Table Now';
    }
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
                source={{uri: getImage()}}
                style={styles.imageEvent}
                resizeMode="cover"
              />
            </View>
            <AppMenu navigation={navigation} />
            <View style={styles.cardContainer}>
              <AppText style={styles.cardTitle}>{getTitle()}</AppText>
              {getDate() ? (
                <AppText style={styles.date}>
                  {' '}
                  {moment(getDate(), 'DD/MM//YYYY').format(DDMMMYYYY)}
                </AppText>
              ) : null}
              <AppText style={styles.desc}>
                {getDescription()?.replace(/<\/?[^>]+(>|$)/g, '')}
              </AppText>
              {isDetail ? null : (
                <View style={styles.buttonContainer}>
                  <AppButton
                    label={getButton()}
                    containerStyle={styles.btnContainer}
                    labelStyle={styles.btnLbl}
                    onPress={onBookEvent}
                  />
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </MasterView>
  );
};

export default EventDetail;
