import React, {useRef, useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {GradientBorderView} from '../../components/GradientBorderView/GradientBorderView';
import styles from './Styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text18} from '../../components/Text';
import {COLORS} from '../../shared/themes';
import FormInput from '../../components/FormInput/FormInput';
import ButtonComp from '../../components/Button/ButtonComp';
import {registerAction} from '../../redux/reducers/auth/auth.actions';
import {isEmailValid} from '../../shared/functions';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const scrollViewRef = useRef(null);
  const [fname, setFName] = useState('');
  const [lname, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState({error: false, msg: ''});
  const [emailError, setemailError] = useState({error: false, msg: ''});
  const [fnameError, setFNameError] = useState({error: false, msg: ''});
  const [lnameError, setLNameError] = useState({error: false, msg: ''});
  const [confirmPasswordError, setconfirmPasswordError] = useState({
    error: false,
    msg: '',
  });

  const [userExistsError, setUserExistsError] = useState({
    error: false,
    msg: '',
  });

  const onSignUp = () => {
    if (!lname) {
      setFNameError({error: true, msg: 'Please enter first name !'});
      setLNameError({error: true, msg: 'Please enter last name !'});
      setemailError({error: true, msg: 'Please enter email !'});
      setPasswordError({error: true, msg: 'Please enter password !'});
      setconfirmPasswordError({
        error: true,
        msg: 'Please enter confirm password !',
      });
      return;
    }
    if (!email) {
      setemailError({error: true, msg: 'Please enter email !'});
      setPasswordError({error: true, msg: 'Please enter password !'});
      setconfirmPasswordError({
        error: true,
        msg: 'Please enter confirm password !',
      });
      return;
    }
    if (!isEmailValid(email)) {
      setemailError({error: true, msg: 'Please enter valid email !'});
      return;
    }
    if (!password) {
      setPasswordError({error: true, msg: 'Please enter password !'});
      setconfirmPasswordError({
        error: true,
        msg: 'Please enter confirm password !',
      });
      return;
    }
    if (password.length < 6) {
      setPasswordError({
        error: true,
        msg: 'Password must be greater than 6 digits!',
      });
      return;
    }
    if (!confirmPassword) {
      setconfirmPasswordError({
        error: true,
        msg: 'Please enter confirm password !',
      });
      return;
    }
    if (password !== confirmPassword) {
      setconfirmPasswordError({error: true, msg: 'Passowrd not matched !'});
      return;
    }
    dispatch(registerAction({fname, lname, email, password}));
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/backgroundImage1.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <GradientBorderView
          style={styles.underContainer}
          containerStyle={styles.borderContainer}>
          <KeyboardAwareScrollView
            style={{flex: 1}}
            showsVerticalScrollIndicator={false}>
            <View style={{alignItems: 'center'}}>
              <FormInput
                inputStyle={{paddingVertical: 10}}
                placeholder="First Name"
                value={fname}
                onChangeText={value => {
                  setFName(value);
                  setFNameError({error: false, msg: ''});
                }}
              />

              {fnameError.error && (
                <Text style={styles.errMsg}>{fnameError.msg}</Text>
              )}

              <FormInput
                inputStyle={{paddingVertical: 10}}
                placeholder="Last Name"
                value={lname}
                onChangeText={value => {
                  setLName(value);
                  setLNameError({error: false, msg: ''});
                }}
              />
              {lnameError.error && (
                <Text style={styles.errMsg}>{lnameError.msg}</Text>
              )}

              <FormInput
                keyboardType="email-address"
                inputStyle={{paddingVertical: 10}}
                placeholder="Email"
                value={email}
                onChangeText={value => {
                  setEmail(value);
                  setemailError({error: false, msg: ''});
                }}
              />
              {emailError.error && (
                <Text style={styles.errMsg}>{emailError.msg}</Text>
              )}
              {userExistsError.error && (
                <Text style={styles.errMsg}>{userExistsError.error}</Text>
              )}

              <FormInput
                inputStyle={{paddingVertical: 10}}
                placeholder="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={value => {
                  setPassword(value);
                  setPasswordError({error: false, msg: ''});
                }}
              />
              {passwordError.error && (
                <Text style={styles.errMsg}>{passwordError.msg}</Text>
              )}

              <FormInput
                inputStyle={{paddingVertical: 10}}
                placeholder="Confirm Password"
                secureTextEntry={true}
                value={confirmPassword}
                onChangeText={value => {
                  setconfirmPassword(value);
                  setconfirmPasswordError({error: false, msg: ''});
                }}
              />
              {confirmPasswordError.error && (
                <Text style={styles.errMsg}>{confirmPasswordError.msg}</Text>
              )}

              <ButtonComp
                btnName="Sign Up"
                styleTxt={{color: COLORS.white}}
                onPress={() => onSignUp()}
              />

              <View style={styles.textView}>
                <Text18>Already a member? </Text18>
                <TouchableOpacity
                  // activeOpacity={0.6}
                  onPress={() => {
                    navigation.navigate('Sign-in');
                  }}>
                  <Text18 textStyle={styles.login}>Login Now!</Text18>
                </TouchableOpacity>
              </View>

              <Text></Text>
              <Text></Text>
            </View>
          </KeyboardAwareScrollView>
        </GradientBorderView>
      </ImageBackground>
    </View>
  );
};

export default Signup;
