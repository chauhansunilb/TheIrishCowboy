import React from 'react';
import {
  AppHeader,
  AppMenu,
  AppProgressBar,
  AppText,
  MasterView,
} from '../../Component';
import {ImageBackground, ScrollView, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import Date from '../../../assets/images/date_red.svg';
import moment from 'moment';

interface FormData {
  [key: string]: any;
}

const NewsDetail = ({navigation, route}: any) => {
  const {news} = route.params;

  console.log('==>', news);
  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg2.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader title="Our News" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollView}>
          <>
            <View style={styles.container}>
              <FastImage
                source={{uri: news.news_image}}
                style={styles.newsImage}
                resizeMode="contain"
              />
            </View>
            <AppMenu navigation={navigation} />
            <View style={styles.cardContainer}>
              <AppText style={styles.title}>{news.news_title}</AppText>
              <View style={styles.dateContainer}>
                <Date color="red" />
                <AppText style={styles.date}>
                  {moment(news.news_date, 'DD/MM/YYYY').format('DD, MMM YYYY')}
                </AppText>
              </View>
              <AppText style={styles.newDesc}>{news.news_details}</AppText>
            </View>
          </>
        </ScrollView>
      </ImageBackground>
    </MasterView>
  );
};

export default NewsDetail;
