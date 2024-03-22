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
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {getRequest, postRequest} from '../../Util/HttpUtility';
import {BOOKINGTABLE, TABLEBOOKING} from '../../Util/ApiConst';
import FastImage from 'react-native-fast-image';
import DatePicker from 'react-native-date-picker';
import {theme} from '../../Shared/theme';
import moment from 'moment';
import {DDMMMYYYY, isRequired, isValidEmail} from '../../Util/Const';

interface Info {
  table_booking_image?: string;
  table_booking_note?: string;
}

interface FormData {
  [key: string]: string;
}

const TableReservation = ({navigation}: any) => {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormData>({});
  const [isLoading, setLoading] = useState(true);
  const [info, setInfo] = useState<Info>({});
  const [showDatePicker, setDatePicker] = useState(false);

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

  const onChangeHandler = (field: string, value: any) => {
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
    const {name, phone, email, date, guests, requirement} = formData;
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
    if (isRequired(date)) {
      error.date = 'Please select date';
      isError = true;
    }

    if (isRequired(phone)) {
      error.phone = 'Please enter number';
      isError = true;
    }

    if (isRequired(guests)) {
      error.guests = 'Please enter number of guests';
      isError = true;
    }

    if (isRequired(requirement)) {
      error.requirement = 'Please enter further requirements';
      isError = true;
    }

    if (isError) {
      setErrors(error);
    } else {
      let body = {
        name,
        email,
        date,
        phone,
        guests,
        requirement,
      };
      try {
        let url = `${BOOKINGTABLE}`;
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
      <AppHeader title="Table Booking" isBack={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
              <FastImage
                source={{uri: info?.table_booking_image}}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <View style={styles.formContainer}>
              <AppInput
                placeholder="Name"
                value={formData?.name}
                onChangeText={text => onChangeHandler('name', text)}
                error={errors?.name}
              />
              <AppInput
                style={styles.input}
                placeholder="Telephone Number"
                inputMode="tel"
                value={formData?.phone}
                onChangeText={text => onChangeHandler('phone', text)}
                error={errors?.phone}
              />
              <AppInput
                style={styles.input}
                placeholder="Email Address"
                autoComplete="email"
                inputMode="email"
                value={formData?.email}
                onChangeText={text => onChangeHandler('email', text)}
                error={errors?.email}
              />
              <TouchableOpacity
                activeOpacity={theme.activeOpacity}
                onPress={() => setDatePicker(true)}>
                <View style={[styles.input, styles.viewInput]}>
                  <AppText style={styles.inputText}>
                    {formData?.date
                      ? moment(formData?.date).format(DDMMMYYYY)
                      : 'Select Date'}
                  </AppText>
                </View>
              </TouchableOpacity>
              {errors.date ? (
                <AppText style={styles.error}>{errors.date}</AppText>
              ) : null}
              <AppInput
                style={styles.input}
                placeholder="Number of Guests"
                inputMode="tel"
                value={formData?.guests}
                onChangeText={text => onChangeHandler('guests', text)}
                error={errors?.guests}
              />
              <AppInput
                style={styles.input}
                multiline={true}
                numberOfLines={4}
                placeholder="Further Requirements"
                value={formData?.requirement}
                onChangeText={text => onChangeHandler('requirement', text)}
                error={errors?.requirement}
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
        </KeyboardAvoidingView>
      </ScrollView>
      <DatePicker
        modal
        open={showDatePicker}
        date={(formData?.date && new Date(formData.date)) || new Date()}
        onConfirm={date => {
          setDatePicker(false);
          onChangeHandler('date', date);
        }}
        onCancel={() => {
          setDatePicker(false);
        }}
      />
      <AppProgressBar isShow={isLoading} />
    </MasterView>
  );
};

export default TableReservation;
