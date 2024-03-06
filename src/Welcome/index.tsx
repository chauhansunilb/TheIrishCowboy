import React from 'react';
import {AppButton, AppText, MasterView} from '../Component';
import {ImageBackground, View} from 'react-native';
import styles from './styles';
import BG from '../../assets/images/gradient_bg.svg';
import Logo from '../../assets/images/logo.svg';

const Welcome = () => {
  return (
    <MasterView>
      <ImageBackground
        source={require('../../assets/images/welcome.png')}
        resizeMode="cover"
        style={styles.image}>
        <BG width={'100%'} style={styles.gradientBg} />
        <View style={styles.logo}>
          <Logo height={84} />
        </View>

        <View style={styles.bottomContainer}>
          <AppText style={styles.welcome}>Welcome To The Irish Cowboy</AppText>
          <AppText style={styles.welcomeSub}>Bringing a Taste of</AppText>
          <AppText style={styles.welcomeSub}>
            Ireland to Main Street Florence
          </AppText>
          <AppButton label="Get Started" containerStyle={styles.buttonContainer}/>
        </View>
      </ImageBackground>
    </MasterView>
  );
};

export default Welcome;
