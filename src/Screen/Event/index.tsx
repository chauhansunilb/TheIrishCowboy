import React, {useEffect, useState} from 'react';
import {AppHeader, AppProgressBar, AppText, MasterView} from '../../Component';
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../../Shared/theme';
import {EVENTLIST, EVENTLISTTITLE} from '../../Util/ApiConst';
import {getRequest} from '../../Util/HttpUtility';
import FastImage from 'react-native-fast-image';

interface EventItem {
  id: number;
  title: string;
  description: string;
}
const Event = ({navigation}: any) => {
  const [description, setDescription] = useState('');
  const [eventList, setEventList] = useState<Array<EventItem>>([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchEventTitle();
    fetchEventList();
  }, []);

  const fetchEventTitle = async () => {
    try {
      let url = `${EVENTLISTTITLE}`;
      let eventResponse: any = await getRequest(url);
      setLoading(false);
      if (eventResponse) {
        setDescription(eventResponse);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const fetchEventList = async () => {
    try {
      let url = `${EVENTLIST}`;
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
    navigation.push('EventDetail', {item});
  };

  const renderEventRow = ({item}: any) => (
    <TouchableOpacity
      style={styles.subCategoryContainer}
      activeOpacity={0.6}
      onPress={() => onEventPress(item)}>
      <FastImage style={styles.img} source={{uri: item?.live_events_image}} />
      <View style={[styles.flex1, styles.textContainer]}>
        <AppText style={styles.title}>{item?.live_events_title}</AppText>
        <AppText style={styles.desc}>
          {item?.live_events_details.replace(/<\/?[^>]+(>|$)/g, '')}
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

  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader title="Live Events Every Day" />
        <View style={styles.container}>
          <AppText style={styles.lable}>{description}</AppText>
          <View style={styles.flex1}>
            <FlatList
              contentContainerStyle={styles.eventFlatlist}
              showsVerticalScrollIndicator={false}
              data={eventList}
              renderItem={renderEventRow}
              keyExtractor={(item, index) => `event_${item.live_events_image}`}
            />
          </View>
        </View>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default Event;
