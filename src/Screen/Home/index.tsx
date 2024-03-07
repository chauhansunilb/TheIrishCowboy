import React from 'react';
import {AppHeader, AppText, MasterView} from '../../Component';
import {ImageBackground} from 'react-native';
import styles from './style';

const Home = () => {
  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg.png')}
        resizeMode="cover"
        style={styles.image}>
        <AppHeader />
      </ImageBackground>
    </MasterView>
  );
};

export default Home;
