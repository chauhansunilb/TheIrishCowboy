import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  AppButton,
  AppHeader,
  AppInput,
  AppMenu,
  AppProgressBar,
  AppText,
  MasterView,
} from '../../Component';
import {
  ScrollView,
  View,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../../Shared/theme';
import {isRequired, isValidEmail} from '../../Util/Const';
import {CONTACTGET, CONTACTUS} from '../../Util/ApiConst';
import {getRequest, postRequest} from '../../Util/HttpUtility';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

interface FormData {
  [key: string]: string;
}

const ContactUsPage = ({navigation}: any) => {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormData>({});
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState<{[key: string]: string}>({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let url = `${CONTACTGET}`;
      let infoResponse: any = await getRequest(url);
      setLoading(false);
      if (infoResponse) {
        setInfo(infoResponse[0]);
      }
      console.log('====>infoResponse', infoResponse);
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const onChangeHandler = (field: string, value: string) => {
    if (field === 'number') {
      const regex = /^[0-9+]+$/;
      if (regex.test(value)) {
        setFormData(pre => ({
          ...pre,
          [field]: value,
        }));
      }
    } else {
      setFormData(pre => ({
        ...pre,
        [field]: value,
      }));
    }

    setErrors(pre => ({
      ...pre,
      [field]: '',
    }));
  };

  const onSubmit = async () => {
    const {name, email, subject, number, message} = formData;
    const error: FormData = {};
    let isError = false;

    if (isRequired(name)) {
      error.name = 'Please enter name';
      isError = true;
    }
    if (isRequired(email)) {
      error.email = 'Please enter email';
      isError = true;
    } else if (isValidEmail(email)) {
      error.email = 'Please enter valid email';
      isError = true;
    }
    if (isRequired(subject)) {
      error.subject = 'Please enter subject';
      isError = true;
    }

    if (isRequired(number)) {
      error.number = 'Please enter number';
      isError = true;
    }

    if (isRequired(message)) {
      error.message = 'Please enter message';
      isError = true;
    }

    if (isError) {
      setErrors(error);
    } else {
      let body = {
        name,
        email,
        subject,
        phone: number,
        message,
      };
      try {
        let url = `${CONTACTUS}`;
        setLoading(true);
        let result: any = await postRequest(url, body);
        if (result) {
          setFormData({});
          Alert.alert('The Irish Cowboy', result, [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
        }
      } catch (e) {
        console.log('===>api error', e);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <MasterView>
      <AppHeader title="Contact Us" isBack={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        automaticallyAdjustKeyboardInsets={true}>
        <>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              {info?.google_map_latitude && info?.google_map_longitude && (
                <MapView
                  style={styles.map}
                  provider={PROVIDER_GOOGLE}
                  initialRegion={{
                    latitude: +info?.google_map_latitude,
                    longitude: +info?.google_map_longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                  }}>
                  <Marker
                    coordinate={{
                      latitude: +info?.google_map_latitude,
                      longitude: +info?.google_map_longitude,
                    }}
                  />
                </MapView>
              )}
            </View>
          </View>
          <AppMenu navigation={navigation} />
          <View style={styles.contactContainer}>
            <AppText style={styles.title}>{info?.contact_title}</AppText>
            <View style={styles.contactDetail}>
              <View style={styles.iconBox}>
                <MaterialCommunityIcons
                  name="location-on"
                  size={20}
                  color={theme.color.primary2}
                />
              </View>
              <AppText style={styles.lbl}>{info?.addresss}</AppText>
            </View>
            <View style={styles.contactDetail}>
              <View style={styles.iconBox}>
                <Ionicons
                  name="call-sharp"
                  size={20}
                  color={theme.color.primary2}
                />
              </View>
              <AppText style={styles.lbl}>{info?.phone_number}</AppText>
            </View>
            <View style={styles.contactDetail}>
              <View style={styles.iconBox}>
                <Entypo name="mail" size={20} color={theme.color.primary2} />
              </View>
              <AppText style={styles.lbl}>{info?.email_address}</AppText>
            </View>
            <AppText style={[styles.title, styles.getInTouch]}>
              {info?.form_title}
            </AppText>
            <AppInput
              style={styles.input}
              placeholder="Name"
              value={formData?.name}
              onChangeText={text => onChangeHandler('name', text)}
              error={errors?.name}
            />
            <AppInput
              style={styles.input}
              placeholder="Email"
              autoComplete="email"
              inputMode="email"
              value={formData?.email}
              onChangeText={text => onChangeHandler('email', text)}
              error={errors?.email}
            />
            <AppInput
              style={styles.input}
              placeholder="Subject"
              value={formData?.subject}
              onChangeText={text => onChangeHandler('subject', text)}
              error={errors?.subject}
            />
            <AppInput
              style={styles.input}
              placeholder="Phone Number"
              inputMode="tel"
              value={formData?.number}
              onChangeText={text => onChangeHandler('number', text)}
              error={errors?.number}
            />
            <AppInput
              style={styles.input}
              placeholder="Message"
              multiline={true}
              value={formData?.message}
              onChangeText={text => onChangeHandler('message', text)}
              error={errors?.message}
            />
            <View style={styles.buttonContainer}>
              <AppButton
                label="Submit"
                containerStyle={styles.btnContainer}
                labelStyle={styles.btnLbl}
                onPress={onSubmit}
              />
            </View>
          </View>
        </>
      </ScrollView>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default ContactUsPage;
