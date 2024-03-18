import React, {useEffect, useState} from 'react';
import {
  AppButton,
  AppHeader,
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
import {MENU, PROMOTIONALSLIDER} from '../../Util/ApiConst';
import Image from 'react-native-fast-image';
const LENGTH = 3;
interface EventListProps {
  id: number;
  title: string;
  images: string[];
}
const Home = ({navigation}: any) => {
  const {width} = Dimensions.get('window');
  const [crrentIndex, setCurrentIndex] = useState(0);
  const [ourMenuList, setOurMenuList] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const [eventList, setEventList] = useState<Array<EventListProps>>([]);
  const [heroList, setheroList] = useState<Array<string>>([]);

  useEffect(() => {
    fetchPromotionalSlider();
    fetchMenuList();
    setEventList([
      {
        id: 1,
        title: 'Weekly Events',
        images: [
          require('../../../assets/images/dummy_slider2.png'),
          require('../../../assets/images/dummy_slider2.png'),
          require('../../../assets/images/dummy_slider2.png'),
        ],
      },
      {
        id: 2,
        title: 'Sports Events',
        images: [
          require('../../../assets/images/dummy_slider2.png'),
          require('../../../assets/images/dummy_slider2.png'),
          require('../../../assets/images/dummy_slider2.png'),
          require('../../../assets/images/dummy_slider2.png'),
          require('../../../assets/images/dummy_slider2.png'),
        ],
      },
      {
        id: 3,
        title: 'Weekly Events',
        images: [
          require('../../../assets/images/dummy_slider2.png'),
          require('../../../assets/images/dummy_slider2.png'),
        ],
      },
      {
        id: 4,
        title: 'Sports Events',
        images: [
          require('../../../assets/images/dummy_slider2.png'),
          require('../../../assets/images/dummy_slider2.png'),
        ],
      },
    ]);
  }, []);

  const fetchPromotionalSlider = async () => {
    try {
      let url = `${PROMOTIONALSLIDER}`;
      setLoading(true);
      let slider: any = await getRequest(url);
      setLoading(false);
      let heroTemp = slider.map((x: any) => x.slider_image);
      setheroList(heroTemp);
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const fetchMenuList = async () => {
    try {
      let url = MENU;
      let menu: any = await getRequest(url);
      let tempOurMenu: any = menu.map((x: any) => ({id: x.id, name: x.name}));
  
      setOurMenuList(tempOurMenu);
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const ourMenuPress = (item: any) => {
    navigation.push('Category', {item});
  };

  const heroSection = () => (
    <View style={styles.heroSliderContainer}>
      <Carousel
        loop
        key={'heroBanner'}
        width={width + 10}
        height={220} //width / 2
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
          <View key={index} style={styles.sliderItemContainer}>
            <Image
              style={styles.heroImage}
              source={{
                uri: heroList[index],
              }}
              resizeMode="cover"
            />
          </View>
        )}
      />
      {heroList.length > 0 && (
        <View style={styles.indicatorContainer}>
          <SlidetIndicator
            size={8}
            currentIndex={crrentIndex}
            length={LENGTH}
          />
        </View>
      )}
    </View>
  );

  const renderOurMenuRow = ({item}: any) => (
    <View style={styles.ourMenuItemContainer}>
      <AppButton
        label={item.name}
        containerStyle={styles.ourMenuBtnContainer}
        labelStyle={styles.ourMenuBtnLabel}
        onPress={() => ourMenuPress(item)}
      />
    </View>
  );
  // advanced - parallax;
  const renderEventRow = ({item}: any) => (
    <View>
      <AppText style={styles.title}>{item.title}</AppText>
      <View>
        <SliderBox
          images={item.images}
          sliderBoxHeight={250}
          dotColor={theme.color.primary2}
          inactiveDotColor={theme.color.white}
          paginationBoxVerticalPadding={20}
          resizeMode={'cover'}
          dotStyle={theme.dotStyle}
          ImageComponentStyle={styles.eventImageStyle}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
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
        <AppHeader title="Welcome To The Irish Cowboy" />
        <ScrollView
          scrollEventThrottle={56}
          // style={{flex: 1}}
          showsVerticalScrollIndicator={false}>
          <View>
            {heroSection()}
            {ourMenuList.length > 0 && (
              <View style={styles.ourMenuContainer}>
                <AppText style={styles.title}>Our Menu</AppText>
                <FlatList
                  contentContainerStyle={styles.ourContainerFlatList}
                  showsHorizontalScrollIndicator={false}
                  data={ourMenuList}
                  horizontal={true}
                  renderItem={renderOurMenuRow}
                  keyExtractor={(item, index) => `menu_${index}`}
                />
              </View>
            )}
            {eventList.length > 0 && (
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
            )}
          </View>
        </ScrollView>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default Home;
