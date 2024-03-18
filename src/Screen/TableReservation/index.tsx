import React, {useEffect, useState} from 'react';
import {
  AppButton,
  AppHeader,
  AppInput,
  AppProgressBar,
  AppText,
  MasterView,
} from '../../Component';
import styles from './styles';
import {ScrollView, View} from 'react-native';
import {getRequest} from '../../Util/HttpUtility';
import {TABLEBOOKING} from '../../Util/ApiConst';
import FastImage from 'react-native-fast-image';

interface Info {
  table_booking_image?: string;
  table_booking_note?: string;
}
const TableReservation = ({navigation}: any) => {
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState<Info>({});

  useEffect(() => {
    fetchInfo();
  }, []);

  const fetchInfo = async () => {
    try {
      let url = `${TABLEBOOKING}`;
      let infoData: any = await getRequest(url);
      if (infoData) {
        setInfo(infoData[0]);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = () => {
    navigation.push('ContactUs');
  };

  return (
    <MasterView>
      <AppHeader title="Table Booking" isBack={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <FastImage
              source={{uri: info?.table_booking_image}}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.formContainer}>
            <AppInput placeholder="Name" />
            <AppInput style={styles.input} placeholder="Telephone Number" />
            <AppInput style={styles.input} placeholder="Email Address" />
            <AppInput style={styles.input} placeholder="Select Date" />
            <AppInput style={styles.input} placeholder="Number of Guests" />
            <AppInput
              style={styles.input}
              multiline={true}
              numberOfLines={4}
              placeholder="Further Requirements"
            />
            <View style={styles.buttonContainer}>
              <AppButton
                label="Submit"
                containerStyle={styles.btnContainer}
                labelStyle={styles.btnLbl}
                onPress={onSubmit}
              />
            </View>
            <View style={styles.noteContainer}>
              <AppText style={[styles.label, styles.noteLbl]}>
                NOTE
                <AppText style={[styles.label]}>
                  {' '}
                  - Note by submitting this online request does not guarantee
                  the booking, one of our management staff will contact you
                  shortly with a confirmation
                </AppText>
              </AppText>
            </View>
          </View>
        </View>
      </ScrollView>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default TableReservation;
