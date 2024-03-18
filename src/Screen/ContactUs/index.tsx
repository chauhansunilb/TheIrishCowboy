import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  AppButton,
  AppHeader,
  AppInput,
  AppProgressBar,
  AppText,
  MasterView,
} from '../../Component';
import {ScrollView, View, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {theme} from '../../Shared/theme';
import {isRequired, isValidEmail} from '../../Util/Const';
import {CONTACTGET} from '../../Util/ApiConst';
import {getRequest} from '../../Util/HttpUtility';
import MapView from 'react-native-maps';

interface FormData {
  [key: string]: string;
}

const ContactUs = () => {
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

  const onSubmit = () => {
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
    }
  };

  return (
    <MasterView>
      <AppHeader title="Contact Us" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require('../../../assets/images/map.png')}
              style={styles.image}
              resizeMode="cover"
            />
            {/* <MapView
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            /> */}
          </View>
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
        </View>
      </ScrollView>
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default ContactUs;
