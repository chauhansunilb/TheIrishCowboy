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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../Shared/theme';
import {
  EVENTLISTTITLE,
  SPORTEVENTSLIST,
  WEEKLYEVENTSLIST,
} from '../../Util/ApiConst';
import {getRequest} from '../../Util/HttpUtility';
import FastImage from 'react-native-fast-image';
import {removeSpecialCharacter} from '../../Util/Const';

interface EventItem {
  id: number;
  title: string;
  description: string;
}

const getEventData = (
  item: any,
  isSportEvent: boolean,
  isWeeklyEvent: boolean,
  isCateringEvent: boolean,
) => {
  if (isSportEvent) {
    return {
      title: item?.sports_events_title,
      details: item?.sports_events_details,
      link: item?.sports_events_link,
      image: item?.sports_events_image,
    };
  } else if (isWeeklyEvent) {
    return {
      title: item?.weekly_events_title,
      details: item?.weekly_events_details,
      link: item?.weekly_events_link,
      image: item?.weekly_events_image,
    };
  } else if (isCateringEvent) {
    return {
      title: item?.catering_services_title,
      details: item?.catering_services_details,
      link: item?.catering_services_link,
      image: item?.catering_services_image,
    };
  } else {
    return null; // Or an object with default/fallback values
  }
};

const Event = ({navigation, route}: any) => {
  const [description, setDescription] = useState('');
  const [eventList, setEventList] = useState<Array<EventItem>>([]);
  const {isSportEvent, isWeeklyEvent, isCateringEvent, title, listingUrl} =
    route.params;

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // fetchEventTitle();
    fetchEventList();
  }, []);

  const fetchEventTitle = async () => {
    try {
      let url = `${EVENTLISTTITLE}`;
      let eventResponse: any = await getRequest(url);
      setLoading(false);
      if (eventResponse) {
        setDescription(removeSpecialCharacter(eventResponse));
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const fetchEventList = async () => {
    try {
      let url = listingUrl;
      let eventListResponse: any = await getRequest(url);
      setLoading(false);
      if (eventListResponse) {
        // setDescription(eventListResponse.acf.live_music_details);
        setEventList(eventListResponse);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const onEventPress = (item: any) => {
    navigation.push('EventDetail', {item, isSportEvent, isWeeklyEvent, isCateringEvent});
  };

  const renderEventRow = ({item}: any) => {
    const eventData = getEventData(
      item,
      isSportEvent,
      isWeeklyEvent,
      isCateringEvent,
    );
    return (
      <TouchableOpacity
        style={styles.subCategoryContainer}
        activeOpacity={0.6}
        onPress={() => onEventPress(item)}>
        <FastImage
          style={styles.img}
          source={{
            uri: eventData?.image,
          }}
        />
        <View style={[styles.flex1, styles.textContainer]}>
          <AppText style={styles.title}>{eventData?.title}</AppText>
          <AppText style={styles.desc} numberOfLines={3} ellipsizeMode="tail">
            {eventData?.details?.replace(/<\/?[^>]+(>|$)/g, '')}
          </AppText>
        </View>
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
        source={require('../../../assets/images/home_bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader title={`${title}`} />
        <View style={styles.container}>
          {/* <AppText style={styles.lable}>{description}</AppText> */}
          <AppMenu navigation={navigation} />
          <View style={[styles.flex1, styles.m10]}>
            <FlatList
              contentContainerStyle={styles.eventFlatlist}
              showsVerticalScrollIndicator={false}
              data={eventList}
              renderItem={renderEventRow}
              keyExtractor={(item, index) => `event_${index}`}
            />
          </View>
        </View>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default Event;
