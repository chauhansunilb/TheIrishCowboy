import React, {useEffect, useState} from 'react';
import {
  AppHeader,
  AppMenu,
  AppProgressBar,
  AppText,
  MasterView,
} from '../../Component';
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image';
import {getRequest} from '../../Util/HttpUtility';
import {NEWS} from '../../Util/ApiConst';
import Date from '../../../assets/images/date.svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../Shared/theme';

interface FormData {
  [key: string]: any;
}

const News = ({navigation, route}: any) => {
  const [isLoading, setLoading] = useState(true);
  const [newsInfo, setNewsInfo] = useState<FormData[]>([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      let url = `${NEWS}`;
      let newsReponse: any = await getRequest(url);
      if (newsReponse) {
        setNewsInfo(newsReponse);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const onNewsPress = (item: any) => {
    navigation.navigate('NewsDetail', {news: item});
  };

  const renderItem = ({item, index}: any) => {
    return (
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => onNewsPress(item)}
        activeOpacity={theme.activeOpacity}>
        <FastImage
          style={styles.newsImage}
          source={{uri: item.news_image}}
          resizeMode="contain"
        />
        <AppText style={styles.title}>{item.news_title}</AppText>
        <View style={styles.dateContainer}>
          <Date />
          <AppText style={styles.date}>{item.news_date}</AppText>
        </View>
        <AppText
          style={[styles.date, styles.desc]}
          numberOfLines={3}
          ellipsizeMode="tail">
          {item.news_details}
        </AppText>
        <View style={styles.bottomButtonContainer}>
          <MaterialCommunityIcons
            name="keyboard-backspace"
            size={15}
            color={theme.color.primary}
            style={{transform: [{rotateY: '180deg'}]}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg2.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader title="Our News" />
        <AppMenu navigation={navigation} />
        <View style={styles.flatListView}>
          <FlatList
            data={newsInfo || []}
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            keyExtractor={(item, index) => `${index}`}
          />
        </View>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default News;
