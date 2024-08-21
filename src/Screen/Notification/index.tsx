import React, {useEffect, useState} from 'react';
import {AppHeader, AppProgressBar, AppText, MasterView} from '../../Component';
import styles from './styles';
import {FlatList, ImageBackground, TouchableOpacity, View} from 'react-native';
import {getRequest} from '../../Util/HttpUtility';
import {NOTIFICATION} from '../../Util/ApiConst';
import {DDMMMYYYY} from '../../Util/Const';
import moment from 'moment';

interface NotificationProps {
  notification_title?: string;
  notification_details?: string;
  notification_date?: string;
}

const Notification = ({navigation}: any) => {
  const [notification, setNotification] = useState<Array<NotificationProps>>(
    [],
  );
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    getNotification();
  }, []);

  const getNotification = async () => {
    try {
      let url = `${NOTIFICATION}&time=${Math.random()}`;
      let notificationResponse: any = await getRequest(url);
      if (notificationResponse) {
        notificationResponse.sort((a: any, b: any) => {
          let dateA = new Date(
            a.notification_date.split('/').reverse().join('-'),
          ) as any;
          let dateB = new Date(
            b.notification_date.split('/').reverse().join('-'),
          ) as any;

          return dateB - dateA;
        });
        setNotification(notificationResponse);
        setLoading(false);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.cardContainer}>
        {item.notification_title ? (
          <AppText style={styles.title}>{item.notification_title}</AppText>
        ) : null}
        <AppText style={styles.label}>{item.notification_details}</AppText>
        <AppText style={[styles.label, styles.date]}>
          {moment(item?.notification_date, 'DD/MM//YYYY').format(DDMMMYYYY)}
        </AppText>
      </View>
    );
  };

  return (
    <MasterView>
      <AppHeader
        title="Notification"
        isNotificationIcon={false}
        isBack={true}
      />
      <ImageBackground
        source={require('../../../assets/images/home_bg2.png')}
        resizeMode="cover"
        style={styles.imageMainContainer}>
        <View style={styles.container}>
          <FlatList
            contentContainerStyle={styles.flatListContainer}
            showsVerticalScrollIndicator={false}
            data={notification}
            renderItem={renderItem}
            keyExtractor={(item, index) =>
              `notification${item?.notification_title}`
            }
          />
        </View>
      </ImageBackground>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default Notification;
