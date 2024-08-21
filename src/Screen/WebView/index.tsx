import React, {useState} from 'react';
import {AppHeader, AppMenu, AppProgressBar, MasterView} from '../../Component';
import {ImageBackground, View} from 'react-native';
import styles from './styles';
import WebView from 'react-native-webview';

const WebActivity = ({navigation, route}: any) => {
  const {url} = route.params;
  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg2.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader isBack={true} title="" />
        <AppMenu navigation={navigation} />
        <View style={styles.webView}>
          <WebView
            startInLoadingState={true}
            source={{uri: url}}
            renderLoading={() => {
              return <AppProgressBar isShow={true} />;
            }}
          />
        </View>
      </ImageBackground>
    </MasterView>
  );
};

export default WebActivity;
