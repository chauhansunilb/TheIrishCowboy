import React, {useEffect, useState} from 'react';
import {
  AppButton,
  AppInput,
  AppProgressBar,
  AppText,
  MasterView,
} from '../../Component';
import {ImageBackground, ScrollView, View} from 'react-native';
import styles from './styles';
import Logo from '../../../assets/images/logo.svg';
import {SIGNUPS, SIGNUPSPOST} from '../../Util/ApiConst';
import {getRequest, postRequest} from '../../Util/HttpUtility';
import {isRequired, isValidEmail} from '../../Util/Const';
import {MMKVLoader, useMMKVStorage} from 'react-native-mmkv-storage';

interface FormData {
  [key: string]: string;
}

const storage = new MMKVLoader().initialize();
const Signup = ({navigation, route}: any) => {
  const [formData, setFormData] = useState<FormData>({});
  const [errors, setErrors] = useState<FormData>({});
  const [signupDataTitle, setSignupData] = useState('');
  const [isLoading, setLoading] = useState(true);
  const [user, setUser] = useMMKVStorage('user', storage, '');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let url = SIGNUPS;
      let signUpResponse: any = await getRequest(url);
      if (signUpResponse) {
        setSignupData(signUpResponse);
        setLoading(false);
      }
    } catch (e) {
      console.log('===>api error', e);
      setLoading(false);
    }
  };

  const onChangeHandler = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));

    setErrors(prev => ({
      ...prev,
      [field]: '',
    }));
  };

  const onSignUpPress = async () => {
    const {name, email} = formData;
    let isError = false;
    let _errors: FormData = {};

    if (isRequired(name)) {
      _errors.name = 'Please enter name';
      isError = true;
    }
    if (isRequired(name)) {
      _errors.email = 'Please enter email';
      isError = true;
    } else if (isValidEmail(email)) {
      _errors.email = 'Please valid email';
      isError = true;
    }
    if (isError) {
      setErrors(_errors);
    } else {
      try {
        setErrors({});
        setLoading(true);
        let url = `${SIGNUPSPOST}`;
        let params = {
          name,
          email,
        };
        let signUpResponse: any = await postRequest(url, params);
        if (signUpResponse) {
          setUser(name);
          navigation.replace('Login');
          setLoading(false);
        }
      } catch (e: any) {
        console.log('===>api error', e);
        setErrors({message: e?.message?.toString()});
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <MasterView>
      <ImageBackground
        source={require('../../../assets/images/home_bg3.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.logo}>
          <Logo height={134} />
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          // automaticallyAdjustKeyboardInsets={true}
          contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.mainContainer}>
            <View style={styles.cardBox}>
              <AppText style={styles.title}>{signupDataTitle}</AppText>
              <AppInput
                style={styles.input}
                placeholder="Name"
                value={formData?.name}
                autoCapitalize="none"
                onChangeText={text => onChangeHandler('name', text)}
                error={errors?.name}
              />
              <AppInput
                style={styles.input}
                placeholder="Email Address"
                value={formData?.email}
                inputMode="email"
                autoCapitalize="none"
                onChangeText={text => onChangeHandler('email', text)}
                error={errors?.email || errors?.message}
              />

              <AppButton
                label="Sign Up"
                activeOpacity={0.8}
                containerStyle={styles.btnSignUps}
                labelStyle={styles.btnLableStyle}
                onPress={onSignUpPress}
              />
            </View>
          </View>
        </ScrollView>
        <AppProgressBar isShow={isLoading} />
      </ImageBackground>
    </MasterView>
  );
};

export default Signup;
