import React, { useState, useRef, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import styles from './Styles';
import { COLORS } from '../../shared/themes';
import CustomInput from '../../components/CustomInput/CustomInput';
import ButtonComp from '../../components/Button/ButtonComp';
import { updateAction } from '../../redux/reducers/auth/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import PhoneInput from 'react-native-phone-number-input';
import { AUTH_STATE } from '../../redux/reducers/auth/getState';
import Header from '../../components/Header/Header';
import * as RNLocalize from 'react-native-localize';

const SettingsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(AUTH_STATE.user);
  const [showPassword, setShowPassword] = useState(true);
  const [contactCountry, setContactCountry] = useState('');
  const [fname, setFName] = useState(user?.fname || '');
  const [lname, setLName] = useState(user?.lname || '');
  const [newPass, setNewPass] = useState('');
  const [contact, setContact] = useState(user?.contact || '');
  const [country, setCountry] = useState(user?.country || '');
  const [fNameError, setFNameError] = useState({ error: false, msg: '' });
  const [lNameError, setLNameError] = useState({ error: false, msg: '' });
  const [passwordError, setPasswordError] = useState({ error: false, msg: '' });
  const [contactError, setContactError] = useState({ error: false, msg: '' });

  const [defaultCountry, setDefaultCountry] = useState('');


  const phoneInput = useRef(null);


  const fetchCountryCode = async () => {
    try {
      const userCountryCode = await RNLocalize.getCountry();
      setDefaultCountry(userCountryCode);
    } catch (error) {
    }
  };

  useEffect(() => {
    fetchCountryCode();
  }, []);


  const onUpdate = () => {
    if (!fname) {
      setFNameError({ error: true, msg: 'Please enter your first name' });
      return;
    }
    if (!lname) {
      setLNameError({ error: true, msg: 'Please enter your last name' });
      return;
    }

    if (!contact) {
      setContactError({ error: true, msg: 'Please enter your contact number' });

      return;
    }

    const checkValid = phoneInput.current?.isValidNumber(contact);
    if (!checkValid) {
      setContactError({
        error: true,
        msg: 'Please enter valid number',
      });
      return;
    }
    if (checkValid) {
      setContactError({ error: false, msg: '' });
    }

    dispatch(updateAction({ fname, lname, contact, contactCountry, country }));


  };
  return (
    <View style={styles.container}>
      <Header title="Settings" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          <CustomInput
            label="First name"
            value={fname}
            onChangeText={value => {
              setFName(value);
              setFNameError({ error: false, msg: '' });
            }}
          />
          {fNameError.error && (
            <Text style={styles.errMsg}>{fNameError.msg}</Text>
          )}
          <CustomInput
            label="Last name"
            value={lname}
            onChangeText={value => {
              setLName(value);
              setLNameError({ error: false, msg: '' });
            }}
          />
          {lNameError.error && (
            <Text style={styles.errMsg}>{lNameError.msg}</Text>
          )}
          {defaultCountry ? <PhoneInput
            ref={phoneInput}
            Placeholder="phone"
            activeOutlineColor={COLORS.sky_blue}
            defaultValue={contact}
            defaultCode={country ? country : defaultCountry}
            maxLength={5}
            onChangeFormattedText={contact => {
              const checkValid = phoneInput.current?.isValidNumber(contact);
              setContactCountry('+' + phoneInput.current?.getCallingCode());
              if (!checkValid) {
                setContactError({
                  error: true,
                  msg: 'Please enter valid number',
                });
              }
              if (checkValid) {
                setContactError({ error: false, msg: '' });
              }
              const selectedCountryCode = phoneInput?.current?.getCountryCode();
              setCountry(selectedCountryCode)
              if (contactCountry.length == 3) {
                setContact(contact.substring(3));
              }
              else if (contactCountry.length == 2) {
                setContact(contact.substring(2));
              }
              else {
                setContact(contact.substring(4));
              }
            }}
            withShadow
            autoFocus={false}
            containerStyle={styles.containerStyle}
            textContainerStyle={styles.textContainerStyle}
            textInputStyle={styles.textInputStyle}
            codeTextStyle={styles.codeTextStyle}
          /> : null}

          {contactError.error && (
            <Text style={styles.errMsg}>{contactError.msg}</Text>
          )}

          <ButtonComp
            btnName={'Update'}
            styleTxt={{ color: COLORS.white }}
            styleBtn={{ marginVertical: hp('10%') }}
            onPress={onUpdate}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SettingsScreen;
