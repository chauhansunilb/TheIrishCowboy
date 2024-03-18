import React, {useEffect, useState} from 'react';
import {AppButton, AppProgressBar, AppText, MasterView} from '../../Component';
import {ImageBackground, View, Dimensions} from 'react-native';
import styles from './styles';
import BG from '../../../assets/images/gradient_bg.svg';
import Logo from '../../../assets/images/logo.svg';
import Video from 'react-native-video';
import {WELCOME} from '../../Util/ApiConst';
import {getRequest} from '../../Util/HttpUtility';

interface ApiResponse {
  wl_banner_image?: string;
  wl_banner_video?: string;
  wl_sub_title?: string;
  wl_main_title?: string;
  wl_banner_button_title?: string;
  wl_banner_button_link?: string;
}

const Welcome = ({navigation}: any) => {
  const [welcome, setWelcome] = useState<ApiResponse>({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getWelcomeData();
  }, []);

  const getWelcomeData = async () => {
    try {
      let url = WELCOME;
      let welcomeResponse: any = await getRequest(url);
      if (welcomeResponse) {
        setWelcome(welcomeResponse[0] as ApiResponse);
        setLoading(false);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const onGetStarted = () => {
    navigation.replace('Root');
  };

  return (
    <MasterView>
      <ImageBackground
        source={{uri: welcome?.wl_banner_image}}
        resizeMode="cover"
        style={styles.image}>
        {welcome?.wl_banner_video && (
          <Video
            source={{
              uri: welcome?.wl_banner_video,
            }}
            resizeMode="cover"
            style={styles.backgroundVideo}
          />
        )}
        <BG width={'100%'} style={styles.gradientBg} />
        <View style={styles.logo}>
          <Logo height={84} />
        </View>

        <View style={styles.bottomContainer}>
          <AppText style={styles.welcome}>{welcome?.wl_sub_title}</AppText>
          <AppText style={styles.welcomeSub}>{welcome?.wl_main_title}</AppText>
          {welcome?.wl_banner_button_title ? (
            <AppButton
              label={welcome.wl_banner_button_title}
              containerStyle={styles.buttonContainer}
              onPress={onGetStarted}
            />
          ) : null}
        </View>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default Welcome;
