import React, {useEffect, useState} from 'react';
import {
  AppHeader,
  AppMenu,
  AppProgressBar,
  AppText,
  MasterView,
  SlidetIndicator,
} from '../../Component';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './style';
import Carousel from 'react-native-reanimated-carousel';
import {SliderBox} from 'react-native-image-slider-box';
import {theme} from '../../Shared/theme';
import {getRequest} from '../../Util/HttpUtility';
import {
  CATERINGEVENTS,
  CATERINGEVENTSLIST,
  PROMOTIONALSLIDER,
  SPORTEVENTS,
  SPORTEVENTSLIST,
  WEEKLYEVENTS,
  WEEKLYEVENTSLIST,
} from '../../Util/ApiConst';
import Image from 'react-native-fast-image';
import FastImage from 'react-native-fast-image';
const LENGTH = 3;
interface EventListProps {
  id: number;
  title: string;
  images: string[];
}
const Home = ({navigation}: any) => {
  const {width} = Dimensions.get('window');
  const [crrentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setLoading] = useState(true);
  const [eventList, setEventList] = useState<Array<EventListProps>>([]);
  const [heroList, setheroList] = useState<Array<any>>([]);
  const [weeklyEvent, setWeeklyEvent] = useState<any>({});
  const [sportEvent, setSportEvent] = useState<any>({});
  const [cateringEvent, setCateringEvent] = useState<any>({});

  useEffect(() => {
    fetchPromotionalSlider();
    setEventList([]);
    fetchWeeklyEvent();
    fetchSportsEvents();
    fetchCateringEvent();
  }, []);

  const fetchPromotionalSlider = async () => {
    try {
      let url = `${PROMOTIONALSLIDER}`;
      setLoading(true);
      let slider: any = await getRequest(url);
      // setLoading(false);
      // let heroTemp = slider.map((x: any) => x.slider_image);
      if (slider) {
        setheroList(slider);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const fetchWeeklyEvent = async () => {
    try {
      let url = WEEKLYEVENTS;
      let events: any = await getRequest(url);
      // let images = events.map((x: any) => x.weekly_events_image);
      // setEventList(prev => [
      //   ...prev,
      //   {
      //     id: 1,
      //     title: 'Weekly Events',
      //     events,
      //     images: [...images],
      //   },
      // ]);
      if (events) {
        setWeeklyEvent(events?.[0]);
      }
      setLoading(false);
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const fetchSportsEvents = async () => {
    try {
      let url = SPORTEVENTS;
      let events: any = await getRequest(url);
      // let images = events.map((x: any) => x.sports_events_image);
      // setEventList(prev => [
      //   ...prev,
      //   {
      //     id: 2,
      //     title: 'Sports Events',
      //     events,
      //     images: [...images],
      //   },
      // ]);
      if (events) {
        setSportEvent(events?.[0]);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const fetchCateringEvent = async () => {
    try {
      let url = CATERINGEVENTS;
      let events: any = await getRequest(url);
      if (events) {
        setCateringEvent(events?.[0]);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const onHeroSliderClick = (index: number) => {
    const imageItem = heroList[index];
    const item = {
      live_events_image: imageItem.slider_image,
      live_events_title: imageItem.slider_title,
      live_events_details: imageItem.slider_details,
    };
    navigation.push('EventDetail', {item, isDetail: true});
  };

  const onEventSliderClick = (parentIndex: number, index: number) => {
    const imageItem = eventList?.[parentIndex] as any;
    const events = imageItem?.events?.[index];
    console.log(events);
    if (imageItem?.id === 1) {
      const item = {
        live_events_image: events?.weekly_events_image,
        live_events_title: events.weekly_events_title,
        live_events_details: events.weekly_events_details,
        live_events_date: events.weekly_events_date,
      };
      navigation.push('EventDetail', {item, isDetail: true});
    } else {
      const item = {
        live_events_image: events.sports_events_image,
        live_events_title: events.sports_events_title,
        live_events_details: events.sports_events_details,
        live_events_date: events.sports_events_date,
      };
      navigation.push('EventDetail', {item, isDetail: true});
    }
  };

  const weeklyEventPress = () => {
    navigation.navigate('EventRoot', {
      title: weeklyEvent?.weekly_events_heading,
      listingUrl: WEEKLYEVENTSLIST
    });
  };

  const sportEventPress = () => {
    navigation.navigate('SportRoot', {
      isSportEvent: true,
      title: sportEvent?.sports_events_heading,
      listingUrl: SPORTEVENTSLIST
    });
  };

  const cateringEventPress = () => {
    navigation.push('CateringStackRoot', {
      isCateringEvent: true,
      title: cateringEvent?.catering_services_heading,
      listingUrl: CATERINGEVENTSLIST
    });
  };

  const heroSection = () => (
    <View style={styles.heroSliderContainer}>
      <Carousel
        loop
        key={'heroBanner'}
        width={width + 10}
        height={380} //width / 2
        autoPlay={true}
        testID={'menu'}
        mode="parallax"
        data={heroList}
        scrollAnimationDuration={1000}
        // onSnapToItem={index => setCurrentIndex(index)}
        onProgressChange={(_, absoluteProgress) => {
          setCurrentIndex(Math.round(absoluteProgress));
        }}
        renderItem={({index}) => (
          <TouchableOpacity
            key={index}
            style={styles.sliderItemContainer}
            activeOpacity={1}
            onPress={() => onHeroSliderClick(index)}>
            <Image
              style={styles.heroImage}
              source={{
                uri: heroList?.[index]?.slider_image,
              }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
      {heroList.length > 0 && (
        <View style={styles.indicatorContainer}>
          <SlidetIndicator
            size={8}
            currentIndex={crrentIndex}
            length={heroList.length}
          />
        </View>
      )}
    </View>
  );

  // advanced - parallax;
  const renderEventRow = ({item, index: parentIndex}: any) => (
    <View>
      <AppText style={styles.title}>{item.title}</AppText>
      <View style={styles.mb}>
        <SliderBox
          images={item.images}
          sliderBoxHeight={250}
          dotColor={theme.color.primary2}
          inactiveDotColor={theme.color.white}
          paginationBoxVerticalPadding={20}
          resizeMode={'cover'}
          dotStyle={theme.dotStyle}
          ImageComponentStyle={styles.eventImageStyle}
          onCurrentImagePressed={(index: number) =>
            onEventSliderClick(parentIndex, index)
          }
        />
      </View>
    </View>
  );

  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader title="Welcome To The Irish Cowboy" isBack={false} />
        <ScrollView
          scrollEventThrottle={56}
          // style={{flex: 1}}
          showsVerticalScrollIndicator={false}>
          <View>
            {heroSection()}
            <AppMenu navigation={navigation} />
            {/* {eventList.length > 0 && (
              <View style={styles.eventContainer}>
                <FlatList
                  showsHorizontalScrollIndicator={false}
                  scrollEnabled={false}
                  nestedScrollEnabled={true}
                  data={eventList}
                  renderItem={renderEventRow}
                  keyExtractor={(item, index) => `event${item.id}`}
                />
              </View>
            )} */}
            {/* weekly events */}
            <View style={styles.eventContainer}>
              <AppText style={styles.title}>
                {weeklyEvent?.weekly_events_heading || ''}
              </AppText>
              <TouchableOpacity
                style={[styles.paddingHorizontal]}
                onPress={weeklyEventPress}>
                <FastImage
                  source={{uri: weeklyEvent?.weekly_events_list_image}}
                  style={styles.eventImageStyle}
                  resizeMode={'cover'}
                />
              </TouchableOpacity>
            </View>
            {/* catering event list */}
            <View style={styles.eventContainer}>
              <AppText style={styles.title}>
                {cateringEvent?.catering_services_heading || ''}
              </AppText>
              <TouchableOpacity
                style={[styles.paddingHorizontal]}
                onPress={cateringEventPress}>
                <FastImage
                  source={{uri: cateringEvent?.catering_services_list_image}}
                  style={styles.eventImageStyle}
                  resizeMode={'cover'}
                />
              </TouchableOpacity>
            </View>
            {/* sport events */}
            <View style={styles.eventContainer}>
              <AppText style={styles.title}>
                {sportEvent?.sports_events_heading || ''}
              </AppText>
              <TouchableOpacity
                style={[styles.mb, styles.paddingHorizontal]}
                onPress={sportEventPress}>
                <FastImage
                  source={{uri: sportEvent?.sports_events_list_image}}
                  style={styles.eventImageStyle}
                  resizeMode={'cover'}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default Home;
