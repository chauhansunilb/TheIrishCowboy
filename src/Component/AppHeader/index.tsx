import React, {FC, ReactNode, useRef} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {AppText} from '..';
import styles from './styles';
import Logo from '../../../assets/images/round_logo.svg';
import Notification from '../../../assets/images/notification.svg';
import Camera from '../../../assets/images/camera.svg';
import News from '../../../assets/images/news.svg';
import Navigation from '../../../assets/images/navigation.svg';
import {useNavigation} from '@react-navigation/native';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';
import FontAwesome from 'react-native-vector-icons/FontAwesome6';
import {theme} from '../../Shared/theme';

interface AppHeaderProps {
  title?: string;
  render?: ReactNode;
  isNotificationIcon?: boolean;
  isBack?: boolean;
}
export const AppHeader: FC<AppHeaderProps> = ({
  title,
  render,
  isNotificationIcon = true,
  isBack = true,
}) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const navigation: any = useNavigation();
  const onNotification = () => {
    navigation.navigate('Notification');
  };

  const onNavigator = () => {
    actionSheetRef.current?.show();
  };
  const onFlorenceArizona = () => {
    navigation.navigate('Information');
    actionSheetRef.current?.hide();
  };

  const onGalleryPress = () => {
    navigation.navigate('Gallery');
  };

  const onNews = () => {
    navigation.navigate('News');
  };

  const onOutliningIreland = () => {
    navigation.navigate('Information', {isOutliningIreland: true});
    actionSheetRef.current?.hide();
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      {isBack && (
        <TouchableOpacity
          activeOpacity={theme.activeOpacity}
          style={styles.backStyle}
          onPress={goBack}>
          <FontAwesome name="arrow-left" color={theme.color.white} size={20} />
        </TouchableOpacity>
      )}
      <Logo height={50} width={50} />

      <View style={styles.titlContainer}>
        {title ? <AppText style={styles.title}>{title}</AppText> : null}
        {render ? render : null}
      </View>
      <TouchableOpacity onPress={onGalleryPress} style={styles.navigator}>
        {/*onNavigator */}
        {/* <Navigation style={styles.navigator} /> */}
        <Camera style={styles.navigator} />
      </TouchableOpacity>
      {isNotificationIcon ? (
        <TouchableOpacity onPress={onNews} style={styles.notificationContainer}>
          {/* onNotification */}
          <View>
            {/* <Notification /> */}
            <News />
            <View style={styles.notificationBadge} />
          </View>
        </TouchableOpacity>
      ) : null}
      <ActionSheet ref={actionSheetRef} useBottomSafeAreaPadding>
        <View style={styles.actionSheetContainer}>
          <TouchableOpacity onPress={onFlorenceArizona}>
            <AppText style={styles.menu}>Florence Arizona</AppText>
          </TouchableOpacity>
          <TouchableOpacity onPress={onOutliningIreland}>
            <AppText style={styles.menu}>Outlining Ireland</AppText>
          </TouchableOpacity>
        </View>
      </ActionSheet>
    </View>
  );
};
